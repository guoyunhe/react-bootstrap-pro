import { useId } from 'react';
import { BiSearch } from 'react-bootstrap-icons-pro';
import {
  Box,
  CloseButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerTitle,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'react-bootstrap-pro';

import { useDrawerCleanup } from '../use-drawer-cleanup';

export function NavbarBasicDemo() {
  const id = useId();
  const ref = useDrawerCleanup();
  return (
    <div ref={ref}>
      <Navbar expand='md' bg='1' aria-label='Example navigation'>
        <Container fluid>
          <NavbarBrand href='#'>Navbar</NavbarBrand>
          <NavbarToggler aria-controls={id} data-bs-toggle='drawer' data-bs-target={`#${id}`} />
          <Drawer id={id} aria-labelledby={`${id}-title`}>
            <DrawerHeader>
              <DrawerTitle id={`${id}-title`}>Menu</DrawerTitle>
              <CloseButton data-bs-dismiss='drawer' />
            </DrawerHeader>
            <DrawerBody>
              <NavbarNav me='auto'>
                <NavItem>
                  <NavLink href='#' active>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Link</NavLink>
                </NavItem>
                <NavItem>
                  <Menu
                    trigger={
                      <NavLink component='button' type='button'>
                        Menu
                      </NavLink>
                    }
                  >
                    <MenuItem href='#'>Action</MenuItem>
                    <MenuItem href='#'>Another action</MenuItem>
                  </Menu>
                </NavItem>
                <NavItem>
                  <NavLink disabled>Disabled</NavLink>
                </NavItem>
              </NavbarNav>
              <Box
                component='form'
                role='search'
                d='flex'
                gap={2}
                onSubmit={(event) => event.preventDefault()}
              >
                <Input type='search' placeholder='Search' aria-label='Search' />
                <IconButton
                  type='submit'
                  variant='solid'
                  theme='secondary'
                  aria-label='Submit search'
                >
                  <BiSearch aria-hidden='true' />
                </IconButton>
              </Box>
            </DrawerBody>
          </Drawer>
        </Container>
      </Navbar>
    </div>
  );
}
