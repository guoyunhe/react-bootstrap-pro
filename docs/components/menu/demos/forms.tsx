import type { CSSProperties } from 'react';
import { Box, Button, Checkbox, FormField, FormLabel, Input, Menu } from 'react-bootstrap-pro';

export function MenuFormsDemo() {
  return (
    <Menu show position='static' style={{ '--bs-menu-min-width': '300px' } as CSSProperties}>
      <Box
        component='form'
        d='flex'
        flexDirection='column'
        gap={3}
        p={3}
        onSubmit={(event) => event.preventDefault()}
      >
        <Box>
          <FormLabel htmlFor='menu-form-email'>Email address</FormLabel>
          <Input type='email' id='menu-form-email' placeholder='email@example.com' />
        </Box>
        <Box>
          <FormLabel htmlFor='menu-form-password'>Password</FormLabel>
          <Input type='password' id='menu-form-password' />
        </Box>
        <FormField>
          <Checkbox id='menu-form-check' />
          <Box component='label' htmlFor='menu-form-check'>
            Remember me
          </Box>
        </FormField>
        <Box d='flex' flexDirection='column' gap={2}>
          <Button type='submit' variant='solid' theme='primary'>
            Sign in
          </Button>
          <Box component='a' href='#' theme='secondary'>
            New around here? Sign up
          </Box>
          <Box component='a' href='#' theme='secondary'>
            Forgot password?
          </Box>
        </Box>
      </Box>
    </Menu>
  );
}
