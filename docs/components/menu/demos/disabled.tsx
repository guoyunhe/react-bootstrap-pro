import { Menu, MenuItem } from 'react-bootstrap-pro';

export function MenuDisabledDemo() {
  return (
    <Menu show position='static'>
      <MenuItem href='#'>Regular link</MenuItem>
      <MenuItem disabled>Disabled link</MenuItem>
      <MenuItem href='#'>Another link</MenuItem>
    </Menu>
  );
}
