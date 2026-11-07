import type { CSSProperties } from 'react';
import { BiArrowRight } from 'react-bootstrap-icons-pro';
import { IconLink } from 'react-bootstrap-pro';

const style: CSSProperties & Record<`--${string}`, string> = {
  '--bs-link-color': '#198754',
};

export function IconLinkCustomColorDemo() {
  return (
    <IconLink href='https://getbootstrap.com/docs/6.0/helpers/icon-link/' hover style={style}>
      Bootstrap icon link documentation
      <BiArrowRight aria-hidden='true' />
    </IconLink>
  );
}
