import { Container, Navbar, NavbarBrand } from 'react-bootstrap-pro';

export function NavbarOuterContainerDemo() {
  return (
    <Container>
      <Navbar expand='lg' bg='1' fg='2'>
        <Container fluid>
          <NavbarBrand href='#'>Navbar</NavbarBrand>
        </Container>
      </Navbar>
    </Container>
  );
}
