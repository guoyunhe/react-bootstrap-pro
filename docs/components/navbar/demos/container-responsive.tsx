import { Container, Navbar, NavbarBrand } from 'react-bootstrap-pro';

export function NavbarResponsiveContainerDemo() {
  return (
    <Navbar expand='lg' bg='1' fg='2'>
      <Container fluid='md'>
        <NavbarBrand href='#'>Navbar</NavbarBrand>
      </Container>
    </Navbar>
  );
}
