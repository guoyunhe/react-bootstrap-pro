import { Breadcrumb, BreadcrumbDivider, BreadcrumbItem, BreadcrumbLink } from 'react-bootstrap-pro';

export function BreadcrumbDefaultDividerDemo() {
  return (
    <nav aria-label='Breadcrumb'>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem aria-current='page'>
          <BreadcrumbLink href='/library' active>
            Library
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
  );
}
