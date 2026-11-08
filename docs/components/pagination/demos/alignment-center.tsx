import { PageLink, Pagination, PaginationItem } from 'react-bootstrap-pro';

export function PaginationAlignmentCenterDemo() {
  return (
    <nav aria-label='Centered page navigation'>
      <Pagination justifyContent='center'>
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
