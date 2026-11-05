import { useState } from 'react';
import { Button, ButtonGroup, Menu, MenuItem } from 'react-bootstrap-pro';

export function ButtonGroupVerticalMenuDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ButtonGroup orientation='vertical' aria-label='Vertical button group with menu'>
      <Button variant='solid' theme='primary'>
        Button
      </Button>
      <ButtonGroup aria-label='More actions' position='relative'>
        <Button
          variant='solid'
          theme='primary'
          aria-expanded={menuOpen}
          aria-controls='vertical-button-group-menu'
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </Button>
        <Menu
          id='vertical-button-group-menu'
          show={menuOpen}
          className='position-absolute top-0 start-100'
        >
          <MenuItem href='#vertical-action-1'>Menu link</MenuItem>
          <MenuItem href='#vertical-action-2'>Menu link</MenuItem>
        </Menu>
      </ButtonGroup>
      <Button variant='solid' theme='primary'>
        Button
      </Button>
    </ButtonGroup>
  );
}
