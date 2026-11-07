import { useRef, useState } from 'react';
import { BiChevronExpand } from 'react-bootstrap-icons-pro';
import {
  Box,
  InputGroupButton,
  Input,
  InputGroup,
  Menu,
  MenuDivider,
  MenuItem,
} from 'react-bootstrap-pro';

function SegmentedAddon({ id, end = false }: { id: string; end?: boolean }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeMenu = () => {
    setOpen(false);
    trigger.current?.focus();
  };

  return (
    <>
      <InputGroupButton type='button' variant='outline' theme='secondary'>
        Action
      </InputGroupButton>
      <InputGroupButton
        type='button'
        variant='outline'
        theme='secondary'
        className='menu-toggle-split'
        aria-label='Toggle menu'
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
        <BiChevronExpand aria-hidden='true' />
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

export function InputGroupSegmentedDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <SegmentedAddon id='input-group-segmented-start' />
        <Input aria-label='Text with leading segmented buttons' />
      </InputGroup>
      <InputGroup>
        <Input aria-label='Text with trailing segmented buttons' />
        <SegmentedAddon id='input-group-segmented-end' end />
      </InputGroup>
    </Box>
  );
}
