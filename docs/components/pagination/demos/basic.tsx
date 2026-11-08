import { PageLink, Pagination, PaginationItem } from 'react-bootstrap-pro';

export function PaginationBasicDemo() {
  return (
    <nav aria-label='Page navigation example'>
      <Pagination>
        <PaginationItem>
          <PageLink href='#previous'>Previous</PageLink>
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
