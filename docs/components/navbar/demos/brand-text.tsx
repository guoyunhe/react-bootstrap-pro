import { Box, Container, Navbar, NavbarBrand } from 'react-bootstrap-pro';

export function NavbarBrandTextDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Navbar bg='1' fg='2'>
        <Container fluid>
          <NavbarBrand href='#'>Navbar</NavbarBrand>
        </Container>
      </Navbar>
      <Navbar bg='1' fg='2'>
        <Container fluid>
          <NavbarBrand component='span' mb={0} fontSize='2xl'>
            Navbar
          </NavbarBrand>
        </Container>
      </Navbar>
    </Box>
  );
}
