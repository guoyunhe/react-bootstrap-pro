import { PageLink, Pagination, PaginationItem } from 'react-bootstrap-pro';

export function PaginationAlignmentEndDemo() {
  return (
    <nav aria-label='End-aligned page navigation'>
      <Pagination justifyContent='end'>
        <PaginationItem disabled>
          <PageLink component='span'>Previous</PageLink>
        </PaginationItem>
        {[1, 2, 3].map((page) => (
          <PaginationItem key={page}>
            <PageLink href={`#page-${page}`}>{page}</PageLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PageLink href='#next'>Next</PageLink>
        </PaginationItem>
      </Pagination>
    </nav>
  );
}
