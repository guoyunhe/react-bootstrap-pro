import type { FormEvent } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap-pro';

export function NavbarFormButtonsDemo() {
  return (
    <Navbar bg='1' fg='2'>
      <Container
        component='form'
        fluid
        justifyContent='start'
        onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
      >
        <Button type='button' variant='outline' theme='success' me={2}>
          Main button
        </Button>
        <Button type='button' variant='outline' theme='secondary' size='sm'>
          Smaller button
        </Button>
      </Container>
    </Navbar>
  );
}
