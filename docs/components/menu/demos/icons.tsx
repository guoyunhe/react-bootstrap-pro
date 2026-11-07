import { BiClipboard, BiScissors, BiTrash } from 'react-bootstrap-icons-pro';
import { Menu, MenuDivider, MenuItem, MenuItemIcon } from 'react-bootstrap-pro';

export function MenuIconsDemo() {
  return (
    <Menu show position='static'>
      <MenuItem component='button' type='button'>
        <MenuItemIcon fg='3' aria-hidden='true'>
          <BiClipboard size='1rem' />
        </MenuItemIcon>
        Copy
      </MenuItem>
      <MenuItem component='button' type='button'>
        <MenuItemIcon fg='3' aria-hidden='true'>
          <BiScissors size='1rem' />
        </MenuItemIcon>
        Cut
      </MenuItem>
      <MenuDivider />
      <MenuItem component='button' type='button' theme='danger'>
        <MenuItemIcon aria-hidden='true'>
          <BiTrash size='1rem' />
        </MenuItemIcon>
        Delete
      </MenuItem>
    </Menu>
  );
}
