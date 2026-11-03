import { Box } from 'react-bootstrap-pro';

const schemes = ['light', 'dark', 'auto'] as const;

export function BoxColorSchemeDemo() {
  return (
    <Box display='grid' gap={3} style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
      {schemes.map((scheme) => (
        <Box
          key={scheme}
          colorScheme={scheme}
          bg='body'
          fg='body'
          themeBorder
          className='rounded'
          padding={3}
        >
          <strong>{`color-scheme-${scheme}`}</strong>
          <Box marginTop={2}>
            <input type='date' className='form-control' aria-label={`${scheme} date picker`} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
