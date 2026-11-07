import { BiBox } from 'react-bootstrap-icons-pro';
import { IconLink } from 'react-bootstrap-pro';

export function IconLinkBasicDemo() {
  return (
    <IconLink href='https://getbootstrap.com/docs/6.0/helpers/icon-link/'>
      <BiBox aria-hidden='true' />
      Bootstrap icon link documentation
    </IconLink>
  );
}
