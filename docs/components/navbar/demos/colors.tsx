import { Box, Container, Navbar, NavbarBrand } from 'react-bootstrap-pro';

export function NavbarColorsDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Navbar data-bs-theme='dark' bg='1'>
        <Container fluid>
          <NavbarBrand href='#'>Dark</NavbarBrand>
        </Container>
      </Navbar>
      <Navbar data-bs-theme='dark' bg='primary'>
        <Container fluid>
          <NavbarBrand href='#'>Primary</NavbarBrand>
        </Container>
      </Navbar>
      <Navbar data-bs-theme='light' bg='1'>
        <Container fluid>
          <NavbarBrand href='#'>Light</NavbarBrand>
        </Container>
      </Navbar>
    </Box>
  );
}
