import { Box } from 'react-bootstrap-pro';

const themes = [
  'primary',
  'accent',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'inverse',
] as const;

export function BoxThemeDemo() {
  return (
    <Box display='grid' gap={3}>
      {themes.map((theme) => (
        <Box key={theme} theme={theme} display='flex' flexWrap='wrap' alignItems='center' gap={2}>
          <Box themeStyle='contrast' className='rounded' px={2} py={1}>
            {`${theme} contrast`}
          </Box>
          <Box themeStyle='subtle' className='rounded' px={2} py={1}>
            {`${theme} subtle`}
          </Box>
          <Box themeStyle='muted' className='rounded' px={2} py={1}>
            {`${theme} muted`}
          </Box>
          <Box themeStyle='subtle' themeBorder px={2} py={1}>
            {`${theme} border`}
          </Box>
        </Box>
      ))}
      <Box theme='primary' themeStyle='subtle' className='rounded' p={3}>
        Theme tokens cascade to children.
        <Box themeReset mt={2} p={2} className='border rounded'>
          theme-reset removes the inherited theme from this subtree.
        </Box>
      </Box>
    </Box>
  );
}
