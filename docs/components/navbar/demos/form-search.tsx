import { Box, Button, Container, Input, Navbar } from 'react-bootstrap-pro';

export function NavbarFormSearchDemo() {
  return (
    <Navbar bg='1' fg='2'>
      <Container fluid>
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
