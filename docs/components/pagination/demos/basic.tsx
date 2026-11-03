import { Pagination, PaginationItem, PageLink } from 'react-bootstrap-pro';

export function PaginationBasicDemo() {
  return (
    <nav aria-label='Search results pages'>
      <Pagination>
        <PaginationItem>
          <PageLink href='/page/1'>1</PageLink>
        </PaginationItem>
        <PaginationItem active>
          <PageLink href='/page/2' active>
            2
          </PageLink>
        </PaginationItem>
        <PaginationItem>
          <PageLink href='/page/3'>3</PageLink>
        </PaginationItem>
      </Pagination>
    </nav>
  );
}
