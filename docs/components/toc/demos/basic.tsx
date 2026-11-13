import type { TocHeading } from 'react-bootstrap-pro';
import { Toc } from 'react-bootstrap-pro';

const headings: TocHeading[] = [
  {
    id: 'toc-demo-install',
    text: 'Install',
    children: [
      { id: 'toc-demo-npm', text: 'Using npm' },
      { id: 'toc-demo-yarn', text: 'Using Yarn' },
    ],
  },
  {
    id: 'toc-demo-more-packages',
    text: 'More packages',
    children: [
      { id: 'toc-demo-rubygems', text: 'Using RubyGems' },
      { id: 'toc-demo-nuget', text: 'Using NuGet' },
    ],
  },
  { id: 'toc-demo-cdn', text: 'CDN' },
  { id: 'toc-demo-download', text: 'Download' },
];

export function TocBasicDemo() {
  return <Toc headings={headings} activeId='toc-demo-npm' />;
}
