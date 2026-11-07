import {
  Button,
  Container,
  Menu,
  MenuItem,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
} from 'react-bootstrap-pro';

export function MenuNavbarDemo() {
  return (
    <Navbar colorScheme='dark' bg='body'>
      <Container fluid>
        <NavbarBrand href='#'>Navbar</NavbarBrand>
        <NavbarNav>
          <NavItem>
            <Menu
              trigger={
                <Button variant='solid' theme='secondary'>
                  Menu
                </Button>
              }
            >
              <MenuItem href='#'>Action</MenuItem>
              <MenuItem href='#'>Another action</MenuItem>
              <MenuItem href='#'>Something else here</MenuItem>
            </Menu>
          </NavItem>
        </NavbarNav>
      </Container>
    </Navbar>
  );
}
