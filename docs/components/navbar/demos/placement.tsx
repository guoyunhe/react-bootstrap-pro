import { Container, Navbar, NavbarBrand } from 'react-bootstrap-pro';

export function NavbarPlacementDemo() {
  return (
    <Navbar bg='1'>
      <Container fluid>
        <NavbarBrand href='#'>Default</NavbarBrand>
      </Container>
    </Navbar>
  );
}
