import { BiClipboard, BiScissors, BiTrash } from 'react-bootstrap-icons-pro';
import { Menu, MenuDivider, MenuItem } from 'react-bootstrap-pro';

export function MenuIconsDemo() {
  return (
    <Menu show position='static'>
      <MenuItem component='button' type='button'>
        <BiClipboard className='menu-item-icon fg-3' aria-hidden='true' />
        Copy
      </MenuItem>
      <MenuItem component='button' type='button'>
        <BiScissors className='menu-item-icon fg-3' aria-hidden='true' />
        Cut
      </MenuItem>
      <MenuDivider />
      <MenuItem component='button' type='button' theme='danger'>
        <BiTrash className='menu-item-icon' aria-hidden='true' />
        Delete
      </MenuItem>
    </Menu>
  );
}
