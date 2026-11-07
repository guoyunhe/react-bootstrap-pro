import { Button, Menu, MenuDivider, MenuItem } from 'react-bootstrap-pro';

export function MenuTranslucentDemo() {
  return (
    <Menu
      translucent
      trigger={
        <Button variant='solid' theme='secondary'>
          Menu button
        </Button>
      }
    >
      <MenuItem href='#' active aria-current='true'>
        Active menu item
      </MenuItem>
      <MenuItem href='#'>Menu item</MenuItem>
      <MenuItem href='#'>Menu item</MenuItem>
      <MenuItem href='#'>Menu item</MenuItem>
      <MenuItem href='#'>Menu item</MenuItem>
      <MenuDivider />
      <MenuItem href='#' theme='danger'>
        Danger menu item
      </MenuItem>
    </Menu>
  );
}
