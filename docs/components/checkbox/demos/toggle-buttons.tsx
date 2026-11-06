import { Box } from 'react-bootstrap-pro';

export function CheckboxToggleButtonsDemo() {
  return (
    <Box d='flex' flexWrap='wrap' gap={2}>
      <Box component='input' type='checkbox' className='btn-check' id='checkbox-toggle-single' />
      <Box component='label' className='btn btn-primary' htmlFor='checkbox-toggle-single'>
        Single toggle
      </Box>
      <Box
        component='input'
        type='checkbox'
        className='btn-check'
        id='checkbox-toggle-checked'
        defaultChecked
      />
      <Box component='label' className='btn btn-primary' htmlFor='checkbox-toggle-checked'>
        Checked
      </Box>
      <Box
        component='input'
        type='checkbox'
        className='btn-check'
        id='checkbox-toggle-disabled'
        disabled
      />
      <Box component='label' className='btn btn-primary' htmlFor='checkbox-toggle-disabled'>
        Disabled
      </Box>
    </Box>
  );
}
