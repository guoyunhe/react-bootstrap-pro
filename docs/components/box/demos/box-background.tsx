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

const opacities = [20, 40, 60, 80, 100] as const;

export function BoxBackgroundDemo() {
  return (
    <Box className='d-grid gap-3'>
      {themes.map((theme) => (
        <Box key={theme} className='d-flex flex-wrap align-items-center gap-2'>
          <Box bg={theme} className='px-2 py-1 rounded'>
            {`bg-${theme}`}
          </Box>
          <Box bgSubtle={theme} fgEmphasis={theme} className='px-2 py-1 rounded'>
            {`bg-subtle-${theme}`}
          </Box>
          <Box bgMuted={theme} fgEmphasis={theme} className='px-2 py-1 rounded'>
            {`bg-muted-${theme}`}
          </Box>
        </Box>
      ))}
      <Box className='d-flex flex-wrap align-items-center gap-2'>
        <Box bg='primary' gradient className='px-3 py-2 rounded'>
          bg-gradient
        </Box>
        {opacities.map((opacity) => (
          <Box key={opacity} bg='primary' bgOpacity={opacity} className='px-2 py-1 rounded'>
            {`bg-${opacity}`}
          </Box>
        ))}
        <Box bg='transparent' themeBorder className='px-2 py-1'>
          bg-transparent
        </Box>
      </Box>
    </Box>
  );
}
