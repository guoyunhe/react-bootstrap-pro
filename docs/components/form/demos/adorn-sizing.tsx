import { BiSearch } from 'react-bootstrap-icons-pro';
import { Box, FormAdornIcon, FormControl, Input } from 'react-bootstrap-pro';

export function FormAdornSizingDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormControl component='label' adorn size='sm'>
        <FormAdornIcon aria-hidden='true'>
          <BiSearch />
        </FormAdornIcon>
        <Input ghost placeholder='Small input' aria-label='Small input' />
      </FormControl>
      <FormControl component='label' adorn>
        <FormAdornIcon aria-hidden='true'>
          <BiSearch />
        </FormAdornIcon>
        <Input ghost placeholder='Default input' aria-label='Default input' />
      </FormControl>
      <FormControl component='label' adorn size='lg'>
        <FormAdornIcon aria-hidden='true'>
          <BiSearch />
        </FormAdornIcon>
        <Input ghost placeholder='Large input' aria-label='Large input' />
      </FormControl>
    </Box>
  );
}
