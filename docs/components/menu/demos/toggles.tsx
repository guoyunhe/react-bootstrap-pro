import type { KeyboardEvent } from 'react';
import { BiChevronExpand } from 'react-bootstrap-icons-pro';
import { Box, Button, ButtonGroup, Menu, MenuDivider, MenuItem } from 'react-bootstrap-pro';

export function MenuTogglesDemo() {
  return (
    <Box d='flex' gap={3}>
      <Box>
        <Menu
          trigger={
            <Button
              component='a'
              href='#'
              role='button'
              variant='solid'
              theme='primary'
              onKeyDown={(event: KeyboardEvent<HTMLAnchorElement>) => {
                if (event.key === ' ') {
                  event.preventDefault();
                  event.currentTarget.click();
                }
              }}
            >
              Toggle menu
            </Button>
          }
        >
          <MenuItem href='#'>Menu item 1</MenuItem>
          <MenuItem href='#'>Menu item 2</MenuItem>
          <MenuItem href='#'>Menu item 3</MenuItem>
        </Menu>
      </Box>
      <ButtonGroup>
        <Button variant='solid' theme='secondary'>
          Split
        </Button>
        <Menu
          trigger={
            <Button
              variant='solid'
              theme='secondary'
              className='menu-toggle-split'
              aria-label='Toggle split menu'
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
