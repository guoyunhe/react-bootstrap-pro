import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProvider,
  useBreadcrumb,
} from 'react-bootstrap-pro';

function BreadcrumbTrail() {
  const entries = useBreadcrumb();

  return (
    <nav aria-label='Breadcrumb'>
      <Breadcrumb>
        {entries.map((entry, index) => (
          <Fragment key={index}>
            {index > 0 && <BreadcrumbDivider />}
            <BreadcrumbItem>
              <BreadcrumbLink href={entry.href} active={index === entries.length - 1}>
                {entry.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Fragment>
        ))}
      </Breadcrumb>
    </nav>
  );
}

export function BreadcrumbProviderNestedDemo() {
  return (
    <BreadcrumbProvider items={[{ label: 'Home', href: '/' }]}>
      <BreadcrumbProvider items={[{ label: 'Library', href: '/library' }]}>
        <BreadcrumbProvider items={[{ label: 'Data', href: '/library/data' }]}>
          <BreadcrumbTrail />
        </BreadcrumbProvider>
      </BreadcrumbProvider>
    </BreadcrumbProvider>
  );
}
