import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function AddingRowsDemo() {
  return (
    <Grid rows={3} columns={3} className='text-center'>
      <Box bg='primary' bgo={10} rounded p={2}>
        Auto-column
      </Box>
      <GridItem start={2} style={{ gridRow: 2 }}>
        <Box bg='primary' bgo={10} rounded p={2}>
          Auto-column
        </Box>
      </GridItem>
      <GridItem start={3} style={{ gridRow: 3 }}>
        <Box bg='primary' bgo={10} rounded p={2}>
          Auto-column
        </Box>
      </GridItem>
    </Grid>
  );
}
