import { Box, Button, Menu, MenuDivider, MenuItem } from 'react-bootstrap-pro';

export function MenuDarkDemo() {
  return (
    <Box colorScheme='dark'>
      <Menu
        trigger={
          <Button variant='solid' theme='secondary'>
            Menu button
          </Button>
        }
      >
        <MenuItem href='#' active aria-current='true'>
          Action
        </MenuItem>
        <MenuItem href='#'>Another action</MenuItem>
        <MenuItem href='#'>Something else here</MenuItem>
        <MenuDivider />
        <MenuItem href='#'>Separated link</MenuItem>
      </Menu>
    </Box>
  );
}
