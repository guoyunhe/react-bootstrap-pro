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
          <Box bg={theme} className='rounded' px={2} py={1}>
            {`bg-${theme}`}
          </Box>
          <Box bg={theme} bgSubtle fg={theme} fgEmphasis className='rounded' px={2} py={1}>
            {`bg-subtle-${theme}`}
          </Box>
          <Box bg={theme} bgMuted fg={theme} fgEmphasis className='rounded' px={2} py={1}>
            {`bg-muted-${theme}`}
          </Box>
        </Box>
      ))}
      <Box display='flex' flexWrap='wrap' alignItems='center' gap={2}>
        <Box bg='primary' gradient className='rounded' px={3} py={2}>
          bg-gradient
        </Box>
        {opacities.map((opacity) => (
          <Box key={opacity} bg='primary' bgo={opacity} className='rounded' px={2} py={1}>
            {`bg-${opacity}`}
          </Box>
        ))}
        <Box bg='transparent' themeBorder px={2} py={1}>
          bg-transparent
        </Box>
      </Box>
    </Box>
  );
}
