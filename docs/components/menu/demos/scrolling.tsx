import type { CSSProperties } from 'react';
import { Menu, MenuItem } from 'react-bootstrap-pro';

export function MenuScrollingDemo() {
  return (
    <Menu
      show
      position='static'
      style={{ '--bs-menu-max-height': '145px', '--bs-menu-overflow-y': 'auto' } as CSSProperties}
    >
      {Array.from({ length: 8 }, (_, index) => (
        <MenuItem key={index} component='button' type='button'>
          Item {index + 1}
        </MenuItem>
      ))}
    </Menu>
  );
}
