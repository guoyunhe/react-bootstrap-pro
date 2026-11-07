import type { CSSProperties } from 'react';
import { BiClipboard } from 'react-bootstrap-icons-pro';
import { IconLink } from 'react-bootstrap-pro';

const style: CSSProperties & Record<`--${string}`, string> = {
  '--bs-icon-link-transform': 'translate3d(0, -.125rem, 0)',
};

export function IconLinkCustomTransformDemo() {
  return (
    <IconLink href='https://getbootstrap.com/docs/6.0/helpers/icon-link/' hover style={style}>
      <BiClipboard aria-hidden='true' />
      Bootstrap icon link documentation
    </IconLink>
  );
}
