import { Menu, MenuItem } from 'react-bootstrap-pro';

export function MenuScrollableDemo() {
  return (
    <Menu show scrollable position='static'>
      {Array.from({ length: 30 }, (_, index) => (
        <MenuItem key={index} component='button' type='button'>
          Item {index + 1}
        </MenuItem>
      ))}
    </Menu>
  );
}
