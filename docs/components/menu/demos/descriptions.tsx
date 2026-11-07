import { Menu, MenuItem, MenuItemContent, MenuItemDescription } from 'react-bootstrap-pro';

export function MenuDescriptionsDemo() {
  return (
    <Menu show position='static'>
      <MenuItem component='button' type='button'>
        <MenuItemContent>
          Publish now
          <MenuItemDescription>Make this page visible immediately</MenuItemDescription>
        </MenuItemContent>
      </MenuItem>
      <MenuItem component='button' type='button'>
        <MenuItemContent>
          Schedule
          <MenuItemDescription>Set a future publish date</MenuItemDescription>
        </MenuItemContent>
      </MenuItem>
    </Menu>
  );
}
