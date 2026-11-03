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

const opacities = [20, 40, 60, 80, 100] as const;

export function BoxBackgroundDemo() {
  return (
    <Box display='grid' gap={3}>
      {themes.map((theme) => (
        <Box key={theme} display='flex' flexWrap='wrap' alignItems='center' gap={2}>
          <Box bg={theme} className='rounded' paddingX={2} paddingY={1}>
            {`bg-${theme}`}
          </Box>
          <Box bgSubtle={theme} fgEmphasis={theme} className='rounded' paddingX={2} paddingY={1}>
            {`bg-subtle-${theme}`}
          </Box>
          <Box bgMuted={theme} fgEmphasis={theme} className='rounded' paddingX={2} paddingY={1}>
            {`bg-muted-${theme}`}
          </Box>
        </Box>
      ))}
      <Box display='flex' flexWrap='wrap' alignItems='center' gap={2}>
        <Box bg='primary' gradient className='rounded' paddingX={3} paddingY={2}>
          bg-gradient
        </Box>
        {opacities.map((opacity) => (
          <Box
            key={opacity}
            bg='primary'
            bgOpacity={opacity}
            className='rounded'
            paddingX={2}
            paddingY={1}
          >
            {`bg-${opacity}`}
          </Box>
        ))}
        <Box bg='transparent' themeBorder paddingX={2} paddingY={1}>
          bg-transparent
        </Box>
      </Box>
    </Box>
  );
}
