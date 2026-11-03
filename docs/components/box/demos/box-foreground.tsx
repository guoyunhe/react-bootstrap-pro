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

const opacities = [100, 80, 60, 40, 20] as const;

export function BoxForegroundDemo() {
  return (
    <Box className='d-grid gap-3'>
      {themes.map((theme) => (
        <Box key={theme} className='d-flex flex-wrap align-items-center gap-3'>
          <Box fg={theme} className='fw-semibold'>
            {`fg-${theme}`}
          </Box>
          <Box fgEmphasis={theme} className='fw-semibold'>
            {`fg-emphasis-${theme}`}
          </Box>
          <Box bg={theme} className='px-2 py-1 rounded'>
            <Box fgContrast={theme}>{`fg-contrast-${theme}`}</Box>
          </Box>
        </Box>
      ))}
      <Box className='d-flex flex-wrap align-items-center gap-3'>
        <Box fg='primary' fgOpacity={100} className='fw-semibold'>
          fg-100
        </Box>
        {opacities.slice(1).map((opacity) => (
          <Box key={opacity} fg='primary' fgOpacity={opacity} className='fw-semibold'>
            {`fg-${opacity}`}
          </Box>
        ))}
        <Box fg='reset' className='fw-semibold'>
          fg-reset
        </Box>
      </Box>
    </Box>
  );
}
