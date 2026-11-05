import { Breadcrumb, BreadcrumbDivider, BreadcrumbItem, BreadcrumbLink } from 'react-bootstrap-pro';

export function BreadcrumbTextDividerDemo() {
  return (
    <nav aria-label='Breadcrumb'>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider>/</BreadcrumbDivider>
        <BreadcrumbItem>
          <BreadcrumbLink href='/library'>Library</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider>/</BreadcrumbDivider>
        <BreadcrumbItem aria-current='page'>
          <BreadcrumbLink href='/library/data' active>
            Data
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
  );
}
