#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { createReadStream, existsSync, mkdirSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, relative, resolve as resolvePath, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

import { chromium } from 'playwright';

const repoRoot = fileURLToPath(new URL('..', import.meta.url));
const docsDistDir = join(repoRoot, 'docs_dist');
// Keep in sync with `base` in vited.config.ts.
const basePath = '/react-bootstrap-pro';
const defaultOutput = join(repoRoot, 'docs/assets/showcase.png');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

const usage = `Usage: pnpm run docs:screenshot [options]

Build the docs site, serve the static output, and capture the component
showcase on the documentation home page for the README.

Options:
  -w, --width <px>     Browser viewport width (default: 1920)
  -s, --scale <n>      Device pixel ratio of the screenshot (default: 2)
  -o, --output <path>  Output image path (default: docs/assets/showcase.png)
      --skip-build     Reuse the existing docs_dist build
  -h, --help           Show this message`;

function buildDocs() {
  return new Promise((resolve, reject) => {
    const child = spawn('pnpm', ['run', 'docs:build'], {
      cwd: repoRoot,
      shell: process.platform === 'win32',
      stdio: 'inherit',
    });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Docs build exited with code ${code}`));
      }
    });
  });
}

function serveDocs(root) {
  const server = createServer((request, response) => {
    let pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
    if (pathname.startsWith(basePath)) {
      pathname = pathname.slice(basePath.length);
    }

    let filePath = join(root, pathname);
    if (filePath !== root && !filePath.startsWith(root + sep)) {
      response.statusCode = 404;
      response.end();
      return;
    }
    if (existsSync(filePath) && statSync(filePath).isDirectory()) {
      filePath = join(filePath, 'index.html');
    }
    if (!existsSync(filePath)) {
      response.statusCode = 404;
      response.end('Not found');
      return;
    }

    response.setHeader(
      'Content-Type',
      contentTypes[extname(filePath)] ?? 'application/octet-stream',
    );
    createReadStream(filePath).pipe(response);
  });

  return new Promise((resolve, reject) => {
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (address === null || typeof address === 'string') {
        reject(new Error('Could not determine the preview server port'));
        return;
      }
      resolve({
        close: () => new Promise((closed) => server.close(closed)),
        port: address.port,
      });
    });
  });
}

async function screenshotShowcase({ width, scale, output, skipBuild }) {
  if (!skipBuild) {
    await buildDocs();
  }
  if (!existsSync(join(docsDistDir, 'index.html'))) {
    throw new Error('docs_dist/index.html is missing. Run without --skip-build first.');
  }

  const server = await serveDocs(docsDistDir);
  let browser;
  try {
    browser = await chromium.launch();
  } catch (error) {
    await server.close();
    throw new Error(
      'Could not launch Chromium. Run `pnpm exec playwright install chromium` and try again.',
      { cause: error },
    );
  }

  try {
    const page = await browser.newPage({
      viewport: { width, height: 1200 },
      deviceScaleFactor: scale,
      colorScheme: 'light',
    });
    await page.goto(`http://127.0.0.1:${server.port}${basePath}/`, { waitUntil: 'networkidle' });

    const frame = page.locator('.showcase-window');
    await frame.waitFor({ state: 'visible' });
    await page.evaluate(() => document.fonts.ready);

    mkdirSync(dirname(output), { recursive: true });
    const size = await frame.evaluate((node) => `${node.clientWidth}x${node.clientHeight}`);
    await frame.screenshot({ path: output });
    const shownPath = relative(repoRoot, output);
    console.log(`Saved ${shownPath.startsWith('..') ? output : shownPath} (${size} at ${scale}x).`);
  } finally {
    await browser.close();
    await server.close();
  }
}

// pnpm forwards the `--` separator when passing script options.
const args = process.argv.slice(2).filter((argument) => argument !== '--');
const { values } = parseArgs({
  args,
  options: {
    help: { type: 'boolean', short: 'h', default: false },
    output: { type: 'string', short: 'o', default: defaultOutput },
    scale: { type: 'string', short: 's', default: '2' },
    'skip-build': { type: 'boolean', default: false },
    width: { type: 'string', short: 'w', default: '1920' },
  },
});

if (values.help) {
  console.log(usage);
} else {
  const width = Number(values.width);
  const scale = Number(values.scale);
  if (!Number.isFinite(width) || width <= 0) {
    throw new Error(`Invalid --width value: ${values.width}`);
  }
  if (!Number.isFinite(scale) || scale <= 0) {
    throw new Error(`Invalid --scale value: ${values.scale}`);
  }

  screenshotShowcase({
    output: resolvePath(values.output),
    scale,
    skipBuild: values['skip-build'],
    width,
  }).catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
