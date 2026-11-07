import { Box, Button, Container, Input, Navbar, NavbarBrand } from 'react-bootstrap-pro';

export function NavbarFormBrandDemo() {
  return (
    <Navbar bg='1' fg='2'>
      <Container fluid>
        <NavbarBrand href='#'>Navbar</NavbarBrand>
        <Box component='form' role='search' d='flex' onSubmit={(event) => event.preventDefault()}>
          <Input type='search' placeholder='Search' aria-label='Search' me={2} />
          <Button type='submit' variant='outline' theme='success'>
            Search
          </Button>
        </Box>
      </Container>
    </Navbar>
  );
}
