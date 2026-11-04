import { BiArrowRight } from 'react-bootstrap-icons-pro';
import { IconLink } from 'react-bootstrap-pro';

export function IconLinkBasicDemo() {
  return (
    <div className='d-flex flex-column align-items-start gap-2'>
      <IconLink href='#icon-link-example'>
        <BiArrowRight aria-hidden='true' />
        Documentation
      </IconLink>
      <IconLink href='#icon-link-example' hover>
        Read more
        <BiArrowRight aria-hidden='true' />
      </IconLink>
    </div>
  );
}
