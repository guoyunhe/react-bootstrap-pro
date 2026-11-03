import { Prose } from 'react-bootstrap-pro';

export function ProseBasicDemo() {
  return (
    <Prose>
      <h2>Writing for the web</h2>
      <p>
        Good documentation helps readers understand complex topics. Use{' '}
        <strong>clear language</strong>, useful examples, and{' '}
        <a href='#details'>descriptive links</a>.
      </p>
      <blockquote>
        <p>Make the important information easy to find.</p>
      </blockquote>
      <h3>Keep content organized</h3>
      <ul>
        <li>Use headings to show structure.</li>
        <li>Use lists to group related points.</li>
        <li>
          Use <code>inline code</code> for technical terms.
        </li>
      </ul>
    </Prose>
  );
}
