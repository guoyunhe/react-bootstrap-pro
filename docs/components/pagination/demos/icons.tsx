import { PageLink, Pagination, PaginationItem } from 'react-bootstrap-pro';

export function PaginationIconsDemo() {
  return (
    <nav aria-label='Page navigation with symbols'>
      <Pagination>
        <PaginationItem>
          <PageLink href='#previous' aria-label='Previous'>
            <span aria-hidden='true'>&laquo;</span>
          </PageLink>
        </PaginationItem>
        {[1, 2, 3].map((page) => (
          <PaginationItem key={page}>
            <PageLink href={`#page-${page}`}>{page}</PageLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PageLink href='#next' aria-label='Next'>
            <span aria-hidden='true'>&raquo;</span>
          </PageLink>
        </PaginationItem>
      </Pagination>
    </nav>
  );
}
