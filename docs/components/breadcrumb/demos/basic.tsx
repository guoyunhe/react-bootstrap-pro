import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbDivider } from 'react-bootstrap-pro';

export function BreadcrumbBasicDemo() {
  return (
    <nav aria-label='Breadcrumb'>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem aria-current='page'>
          <BreadcrumbLink href='/library'>Library</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem aria-current='page'>
          <BreadcrumbLink href='/library/data' active>
            Data
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
  );
}
