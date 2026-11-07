import { Menu, MenuItem } from 'react-bootstrap-pro';

export function MenuActiveDemo() {
  return (
    <Menu show position='static'>
      <MenuItem href='#'>Regular link</MenuItem>
      <MenuItem href='#' active aria-current='true'>
        Active link
      </MenuItem>
      <MenuItem href='#'>Another link</MenuItem>
    </Menu>
  );
}
