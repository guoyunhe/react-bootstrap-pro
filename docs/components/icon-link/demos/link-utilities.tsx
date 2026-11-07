import { BiArrowRight } from 'react-bootstrap-icons-pro';
import { IconLink } from 'react-bootstrap-pro';

export function IconLinkUtilitiesDemo() {
  return (
    <IconLink
      href='https://getbootstrap.com/docs/6.0/helpers/icon-link/'
      hover
      className='theme-success underline-success underline-30 hover:underline-80 underline-offset-3'
    >
      Bootstrap icon link documentation
      <BiArrowRight aria-hidden='true' />
    </IconLink>
  );
}
