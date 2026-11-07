import { BiArrowRight } from 'react-bootstrap-icons-pro';
import { IconLink } from 'react-bootstrap-pro';

export function IconLinkTrailingDemo() {
  return (
    <IconLink href='https://getbootstrap.com/docs/6.0/helpers/icon-link/'>
      Bootstrap icon link documentation
      <BiArrowRight aria-hidden='true' />
    </IconLink>
  );
}
