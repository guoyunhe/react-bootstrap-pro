import { Container, Navbar, NavbarText } from 'react-bootstrap-pro';

export function NavbarTextDemo() {
  return (
    <Navbar bg='1' fg='2'>
      <Container fluid>
        <NavbarText>Navbar text with an inline element</NavbarText>
      </Container>
    </Navbar>
  );
}
