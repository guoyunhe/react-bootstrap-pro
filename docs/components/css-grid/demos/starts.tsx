import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function StartsGridDemo() {
  return (
    <Grid className='text-center'>
      <GridItem span={3} start={2}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-3 .g-start-2
        </Box>
      </GridItem>
      <GridItem span={4} start={6}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-4 .g-start-6
        </Box>
      </GridItem>
    </Grid>
  );
}
