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
          <Box themeStyle='contrast' className='rounded' paddingX={2} paddingY={1}>
            {`${theme} contrast`}
          </Box>
          <Box themeStyle='subtle' className='rounded' paddingX={2} paddingY={1}>
            {`${theme} subtle`}
          </Box>
          <Box themeStyle='muted' className='rounded' paddingX={2} paddingY={1}>
            {`${theme} muted`}
          </Box>
          <Box themeStyle='subtle' themeBorder paddingX={2} paddingY={1}>
            {`${theme} border`}
          </Box>
        </Box>
      ))}
      <Box theme='primary' themeStyle='subtle' className='rounded' padding={3}>
        Theme tokens cascade to children.
        <Box themeReset marginTop={2} padding={2} className='border rounded'>
          theme-reset removes the inherited theme from this subtree.
        </Box>
      </Box>
    </Box>
  );
}
