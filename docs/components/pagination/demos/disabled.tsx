import { PageLink, Pagination, PaginationItem } from 'react-bootstrap-pro';

export function PaginationDisabledDemo() {
  return (
    <nav aria-label='Disabled previous page example'>
      <Pagination>
        <PaginationItem disabled>
          <PageLink component='span'>Previous</PageLink>
        </PaginationItem>
        {[1, 2, 3].map((page) => (
          <PaginationItem key={page}>
            <PageLink href={`#page-${page}`} active={page === 1}>
              {page}
            </PageLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PageLink href='#next'>Next</PageLink>
        </PaginationItem>
      </Pagination>
    </nav>
  );
}
