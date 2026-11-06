import { Box } from 'react-bootstrap-pro';

export function CheckboxToggleButtonsBaseDemo() {
  return (
    <Box d='flex' flexWrap='wrap' gap={2}>
      <Box
        component='input'
        type='checkbox'
        className='btn-check'
        id='checkbox-toggle-base-single'
      />
      <Box component='label' className='btn' htmlFor='checkbox-toggle-base-single'>
        Single toggle
      </Box>
      <Box
        component='input'
        type='checkbox'
        className='btn-check'
        id='checkbox-toggle-base-checked'
        defaultChecked
      />
      <Box component='label' className='btn' htmlFor='checkbox-toggle-base-checked'>
        Checked
      </Box>
      <Box
        component='input'
        type='checkbox'
        className='btn-check'
        id='checkbox-toggle-base-disabled'
        disabled
      />
      <Box component='label' className='btn' htmlFor='checkbox-toggle-base-disabled'>
        Disabled
      </Box>
    </Box>
  );
}
