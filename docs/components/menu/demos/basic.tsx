import { Menu, MenuHeader, MenuItem, MenuDivider } from 'react-bootstrap-pro';

export function MenuBasicDemo() {
  return (
    <Menu show>
      <MenuHeader>Actions</MenuHeader>
      <MenuItem href='/edit'>Edit</MenuItem>
      <MenuDivider />
      <MenuItem href='/archive'>Archive</MenuItem>
    </Menu>
  );
}
