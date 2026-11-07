import { Box, Button, Menu, MenuItem } from 'react-bootstrap-pro';

export function MenuNestedDemo() {
  return (
    <Menu
      trigger={
        <Button variant='solid' theme='secondary'>
          Multi-level menu
        </Button>
      }
    >
      <MenuItem href='#'>Level 1 action</MenuItem>
      <Box className='submenu'>
        <Menu
          placement='right-start'
          trigger={
            <MenuItem component='button' type='button'>
              Level 1 submenu
            </MenuItem>
          }
        >
          <MenuItem href='#'>Level 2 action</MenuItem>
          <Box className='submenu'>
            <Menu
              placement='right-start'
              trigger={
                <MenuItem component='button' type='button'>
                  Level 2 submenu
                </MenuItem>
              }
            >
              <MenuItem href='#'>Level 3 action A</MenuItem>
              <MenuItem href='#'>Level 3 action B</MenuItem>
            </Menu>
          </Box>
          <MenuItem href='#'>Another level 2</MenuItem>
        </Menu>
      </Box>
      <MenuItem href='#'>Another level 1</MenuItem>
    </Menu>
  );
}
