import { Menu, MenuItem } from 'react-bootstrap-pro';

export function MenuItemsDemo() {
  return (
    <Menu show position='static'>
      <MenuItem component='button' type='button'>
        Action
      </MenuItem>
      <MenuItem component='button' type='button'>
        Another action
      </MenuItem>
      <MenuItem component='button' type='button'>
        Something else here
      </MenuItem>
    </Menu>
  );
}
