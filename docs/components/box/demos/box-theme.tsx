import { Box } from '../../../../src';

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
    <Box className='d-grid gap-3'>
      {themes.map((theme) => (
        <Box key={theme} theme={theme} className='d-flex flex-wrap align-items-center gap-2'>
          <Box themeStyle='contrast' className='px-2 py-1 rounded'>
            {`${theme} contrast`}
          </Box>
          <Box themeStyle='subtle' className='px-2 py-1 rounded'>
            {`${theme} subtle`}
          </Box>
          <Box themeStyle='muted' className='px-2 py-1 rounded'>
            {`${theme} muted`}
          </Box>
          <Box themeStyle='subtle' themeBorder className='px-2 py-1'>
            {`${theme} border`}
          </Box>
        </Box>
      ))}
      <Box theme='primary' themeStyle='subtle' className='p-3 rounded'>
        Theme tokens cascade to children.
        <Box themeReset className='mt-2 p-2 border rounded'>
          theme-reset removes the inherited theme from this subtree.
        </Box>
      </Box>
    </Box>
  );
}
