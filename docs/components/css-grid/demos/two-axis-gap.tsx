import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function TwoAxisGapDemo() {
  return (
    <Grid className='text-center' style={{ '--bs-gap': '.25rem 1rem' }}>
      <GridItem span={6}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-6
        </Box>
      </GridItem>
      <GridItem span={6}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-6
        </Box>
      </GridItem>
      <GridItem span={6}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-6
        </Box>
      </GridItem>
      <GridItem span={6}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-6
        </Box>
      </GridItem>
    </Grid>
  );
}
