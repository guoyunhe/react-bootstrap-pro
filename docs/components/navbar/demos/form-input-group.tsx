import { useId, type FormEvent } from 'react';
import { Container, Input, InputGroup, InputGroupText, Navbar } from 'react-bootstrap-pro';

export function NavbarFormInputGroupDemo() {
  const id = useId();
  return (
    <Navbar bg='1' fg='2'>
      <Container
        component='form'
        fluid
        onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
      >
        <InputGroup>
          <InputGroupText id={id}>@</InputGroupText>
          <Input placeholder='Username' aria-label='Username' aria-describedby={id} />
        </InputGroup>
      </Container>
    </Navbar>
  );
}
