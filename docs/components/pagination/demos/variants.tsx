import { PageLink, Pagination, PaginationItem } from 'react-bootstrap-pro';

export function PaginationVariantsDemo() {
  return (
    <nav aria-label='Themed page navigation'>
      <Pagination theme='primary'>
        <PaginationItem>
          <PageLink href='#previous'>Previous</PageLink>
        </PaginationItem>
        {[1, 2, 3].map((page) => (
          <PaginationItem key={page}>
            <PageLink href={`#page-${page}`} active={page === 2}>
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
