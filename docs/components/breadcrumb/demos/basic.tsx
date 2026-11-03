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
          <BreadcrumbLink href='/docs' active>
            Docs
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
  );
}
