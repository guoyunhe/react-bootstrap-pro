import { Box, FormField, FormLabel, Input } from 'react-bootstrap-pro';

export function FormLayoutUtilitiesDemo() {
  return (
    <Box component='form' onSubmit={(event) => event.preventDefault()}>
      <FormField mb={3}>
        <FormLabel htmlFor='layout-utility-email'>Example label</FormLabel>
        <Input id='layout-utility-email' placeholder='Example input placeholder' />
      </FormField>
      <FormField mb={3}>
        <FormLabel htmlFor='layout-utility-name'>Another label</FormLabel>
        <Input id='layout-utility-name' placeholder='Another input placeholder' />
      </FormField>
    </Box>
  );
}
