import { BiThreeDots } from 'react-bootstrap-icons-pro';
import { Breadcrumb, BreadcrumbDivider, BreadcrumbItem, BreadcrumbLink } from 'react-bootstrap-pro';

export function BreadcrumbEllipsisDemo() {
  return (
    <nav aria-label='Breadcrumb'>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbLink href='/documents' aria-label='More pages'>
            <BiThreeDots size={16} aria-hidden='true' />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbLink href='/documents'>Documents</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem aria-current='page'>
          <BreadcrumbLink href='/documents/2026' active>
            2026
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
  );
}
