import { Box, FormLabel } from 'react-bootstrap-pro';

export function SelectNativeSizeDemo() {
  return (
    <div>
      <FormLabel htmlFor='select-native-size'>Size 3 select</FormLabel>
      <Box
        component='select'
        className='form-control'
        id='select-native-size'
        size={3}
        defaultValue=''
      >
        <option value=''>Open this select menu</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Box>
    </div>
  );
}
