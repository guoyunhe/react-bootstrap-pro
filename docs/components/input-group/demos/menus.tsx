import { useRef, useState } from 'react';
import {
  Box,
  InputGroupButton,
  Input,
  InputGroup,
  Menu,
  MenuDivider,
  MenuItem,
} from 'react-bootstrap-pro';

function MenuAddon({ id, end = false }: { id: string; end?: boolean }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeMenu = () => {
    setOpen(false);
    trigger.current?.focus();
  };

  return (
    <>
      <InputGroupButton
        type='button'
        variant='outline'
        theme='secondary'

        aria-expanded={open}
        aria-controls={id}
        onClick={(event) => {
          trigger.current = event.currentTarget;
          setOpen((value) => !value);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') closeMenu();
        }}
      >
        Menu
      </InputGroupButton>
      <Menu
        id={id}
        show={open}
        position='absolute'
        top={100}
        {...(end ? { end: 0 } : { start: 0 })}
        onKeyDown={(event) => {
          if (event.key === 'Escape') closeMenu();
        }}
      >
        <MenuItem component='button' type='button' onClick={closeMenu}>
          Action
        </MenuItem>
        <MenuItem component='button' type='button' onClick={closeMenu}>
          Another action
        </MenuItem>
        <MenuItem component='button' type='button' onClick={closeMenu}>
          Something else here
        </MenuItem>
        <MenuDivider />
        <MenuItem component='button' type='button' onClick={closeMenu}>
          Separated action
        </MenuItem>
      </Menu>
    </>
  );
}

export function InputGroupMenusDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <MenuAddon id='input-group-menu-start' />
        <Input aria-label='Text with leading menu' />
      </InputGroup>
      <InputGroup>
        <Input aria-label='Text with trailing menu' />
        <MenuAddon id='input-group-menu-end' end />
      </InputGroup>
      <InputGroup>
        <MenuAddon id='input-group-menu-both-start' />
        <Input aria-label='Text with two menus' />
        <MenuAddon id='input-group-menu-both-end' end />
      </InputGroup>
    </Box>
  );
}
