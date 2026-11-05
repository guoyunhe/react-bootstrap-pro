import { useState } from 'react';
import { Button, ButtonGroup, Menu, MenuItem } from 'react-bootstrap-pro';

export function ButtonGroupNestingDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ButtonGroup aria-label='Button group with nested menu'>
      <Button variant='solid' theme='primary'>
        1
      </Button>
      <Button variant='solid' theme='primary'>
        2
      </Button>
      <ButtonGroup aria-label='More actions' position='relative'>
        <Button
          variant='solid'
          theme='primary'
          aria-expanded={menuOpen}
          aria-controls='button-group-nested-menu'
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </Button>
        <Menu
          id='button-group-nested-menu'
          show={menuOpen}
          className='position-absolute top-100 start-0'
        >
          <MenuItem href='#nested-action-1'>Menu link</MenuItem>
          <MenuItem href='#nested-action-2'>Menu link</MenuItem>
        </Menu>
      </ButtonGroup>
    </ButtonGroup>
  );
}
