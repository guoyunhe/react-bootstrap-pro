import { BiSearch } from 'react-bootstrap-icons-pro';
import { Box, Input } from 'react-bootstrap-pro';

export function FormAdornSizingDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box component='label' classNameBefore='form-control form-adorn form-control-sm'>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiSearch />
        </Box>
        <Input ghost placeholder='Small input' aria-label='Small input' />
      </Box>
      <Box component='label' classNameBefore='form-control form-adorn'>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiSearch />
        </Box>
        <Input ghost placeholder='Default input' aria-label='Default input' />
      </Box>
      <Box component='label' classNameBefore='form-control form-adorn form-control-lg'>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiSearch />
        </Box>
        <Input ghost placeholder='Large input' aria-label='Large input' />
      </Box>
    </Box>
  );
}
