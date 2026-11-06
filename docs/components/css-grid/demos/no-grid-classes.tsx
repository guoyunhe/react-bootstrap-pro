import { Box, Grid } from 'react-bootstrap-pro';

export function NoGridClassesDemo() {
  return (
    <Grid columns={3} textAlign='center'>
      <Box bg='primary' bgo={10} rounded p={2}>
        Auto-column
      </Box>
      <Box bg='primary' bgo={10} rounded p={2}>
        Auto-column
      </Box>
      <Box bg='primary' bgo={10} rounded p={2}>
        Auto-column
      </Box>
    </Grid>
  );
}
