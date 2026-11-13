import { useCallback, useState } from 'react';
import type { TocHeading } from 'react-bootstrap-pro';
import { Box, collectTocHeadings, Toc, useActiveHeading } from 'react-bootstrap-pro';

export function TocActiveDemo() {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const activeId = useActiveHeading(headings);
  const attachContent = useCallback((element: HTMLDivElement | null) => {
    setHeadings(element ? collectTocHeadings(element, { selector: 'h5[id], h6[id]' }) : []);
  }, []);

  return (
    <Box d='flex' gap={4} alignItems='start'>
      <Box ref={attachContent} flexGrow={1} minW={0}>
        <h5 id='toc-demo-overview' className='h2'>
          Overview
        </h5>
        <p>
          This column is the page content. The outline to the side is collected from its headings
          when the content mounts, so it needs no hand-written list.
        </p>
        <h6 id='toc-demo-usage' className='h3'>
          Usage
        </h6>
        <p>
          Scroll this page and the link for the heading above the reading position stays
          highlighted. The last heading remains active when the page reaches its end.
        </p>
        <h5 id='toc-demo-options' className='h2'>
          Options
        </h5>
        <p>
          Pass <code>selector</code> to <code>collectTocHeadings</code> when the content uses
          another set of heading levels, and pass <code>offset</code> to{' '}
          <code>useActiveHeading</code> when a fixed header covers the top of the page.
        </p>
      </Box>
      <Box position='sticky' top={0} flexShrink={0} style={{ width: 200 }}>
        <Toc headings={headings} activeId={activeId} />
      </Box>
    </Box>
  );
}
