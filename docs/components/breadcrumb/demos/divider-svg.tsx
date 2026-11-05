import { BiChevronDoubleRight } from 'react-bootstrap-icons-pro';
import { Breadcrumb, BreadcrumbDivider, BreadcrumbItem, BreadcrumbLink } from 'react-bootstrap-pro';

export function BreadcrumbSvgDividerDemo() {
  return (
    <nav aria-label='Breadcrumb'>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider>
          <BiChevronDoubleRight size={16} aria-hidden='true' />
        </BreadcrumbDivider>
        <BreadcrumbItem aria-current='page'>
          <BreadcrumbLink href='/library' active>
            Library
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
  );
}
