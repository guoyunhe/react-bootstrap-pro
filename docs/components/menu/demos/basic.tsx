import { Button, Menu, MenuItem } from 'react-bootstrap-pro';

export function MenuBasicDemo() {
  return (
    <Menu
      trigger={
        <Button variant='solid' theme='primary'>
          Toggle menu
        </Button>
      }
    >
      <MenuItem href='#'>Menu item 1</MenuItem>
      <MenuItem href='#'>Menu item 2</MenuItem>
      <MenuItem href='#'>Menu item 3</MenuItem>
    </Menu>
  );
}
