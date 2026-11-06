import { Box } from 'react-bootstrap-pro';

export function CheckboxOutlinedStylesDemo() {
  return (
    <Box d='flex' flexWrap='wrap' gap={2}>
      <Box
        component='input'
        type='checkbox'
        className='btn-check'
        id='checkbox-toggle-outline-primary'
      />
      <Box
        component='label'
        className='btn btn-outline-primary'
        htmlFor='checkbox-toggle-outline-primary'
      >
        Single toggle
      </Box>
      <Box
        component='input'
        type='checkbox'
        className='btn-check'
        id='checkbox-toggle-outline-secondary'
        defaultChecked
      />
      <Box
        component='label'
        className='btn btn-outline-secondary'
        htmlFor='checkbox-toggle-outline-secondary'
      >
        Checked
      </Box>
    </Box>
  );
}
