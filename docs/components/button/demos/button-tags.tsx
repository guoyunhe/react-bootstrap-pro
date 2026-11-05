import { Box, Button } from 'react-bootstrap-pro';

export function ButtonTagsDemo() {
  return (
    <Box d='flex' flexWrap='wrap' alignItems='center' gap={2}>
      <Button component='a' variant='solid' theme='primary' href='#button-tags'>
        Navigation link
      </Button>
      <Button variant='solid' theme='primary' type='button'>
        Button
      </Button>
      <Button component='input' variant='solid' theme='primary' type='button' value='Input' />
      <Button component='input' variant='solid' theme='primary' type='submit' value='Submit' />
      <Button component='input' variant='solid' theme='primary' type='reset' value='Reset' />
    </Box>
  );
}
