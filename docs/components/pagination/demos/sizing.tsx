import { PageLink, Pagination, PaginationItem } from 'react-bootstrap-pro';

export function PaginationSizingDemo() {
  return (
    <>
      {(['sm', undefined, 'lg'] as const).map((size) => (
        <nav key={size ?? 'default'} aria-label={`${size ?? 'default'} page navigation`}>
          <Pagination size={size}>
            {[1, 2, 3].map((page) => (
              <PaginationItem key={page}>
                <PageLink href={`#page-${page}`} active={page === 2}>
                  {page}
                </PageLink>
              </PaginationItem>
            ))}
          </Pagination>
        </nav>
      ))}
    </>
  );
}
