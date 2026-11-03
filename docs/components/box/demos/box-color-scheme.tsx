import { Box } from '../../../../src';

const schemes = ['light', 'dark', 'auto'] as const;

export function BoxColorSchemeDemo() {
  return (
    <Box className='d-grid gap-3' style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
      {schemes.map((scheme) => (
        <Box
          key={scheme}
          colorScheme={scheme}
          bg='body'
          fg='body'
          themeBorder
          className='p-3 rounded'
        >
          <strong>{`color-scheme-${scheme}`}</strong>
          <Box className='mt-2'>
            <input type='date' className='form-control' aria-label={`${scheme} date picker`} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
