import { BiChevronExpand } from 'react-bootstrap-icons-pro';
import { Box, Button, ButtonGroup, Menu, MenuDivider, MenuItem } from 'react-bootstrap-pro';

export function MenuOffsetDemo() {
  return (
    <Box d='flex' gap={2}>
      <Box>
        <Menu
          offset={20}
          trigger={
            <Button variant='solid' theme='secondary'>
              Offset
            </Button>
          }
        >
          <MenuItem href='#'>Action</MenuItem>
          <MenuItem href='#'>Another action</MenuItem>
          <MenuItem href='#'>Something else here</MenuItem>
        </Menu>
      </Box>
      <ButtonGroup>
        <Button variant='solid' theme='secondary'>
          Reference
        </Button>
        <Menu
          trigger={
            <Button
              variant='solid'
              theme='secondary'
              className='menu-toggle-split'
              aria-label='Toggle reference menu'
            >
              <BiChevronExpand aria-hidden='true' />
            </Button>
          }
        >
          <MenuItem href='#'>Action</MenuItem>
          <MenuItem href='#'>Another action</MenuItem>
          <MenuItem href='#'>Something else here</MenuItem>
          <MenuDivider />
          <MenuItem href='#'>Separated link</MenuItem>
        </Menu>
      </ButtonGroup>
    </Box>
  );
}
