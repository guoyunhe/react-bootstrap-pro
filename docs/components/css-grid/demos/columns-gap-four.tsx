import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function ColumnsGapFourDemo() {
  return (
    <Grid columns={4} style={{ '--bs-gap': '5rem' }} className='text-center'>
      <GridItem span={2}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-2
        </Box>
      </GridItem>
      <GridItem span={2}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-2
        </Box>
      </GridItem>
    </Grid>
  );
}
