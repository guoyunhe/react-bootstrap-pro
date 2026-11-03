import { Box, Toggler } from 'react-bootstrap-pro';

export function TogglerBasicDemo() {
  return (
    <>
      <Toggler target='#theme-surface' attribute='class' value='bg-primary'>
        Toggle theme
      </Toggler>
      <Box id='theme-surface' className='border' padding={3}>
        Target
      </Box>
    </>
  );
}
