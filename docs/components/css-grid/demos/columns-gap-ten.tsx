import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function ColumnsGapTenDemo() {
  return (
    <Grid columns={10} style={{ '--bs-gap': '1rem' }} className='text-center'>
      <GridItem span={6}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-6
        </Box>
      </GridItem>
      <GridItem span={4}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-4
        </Box>
      </GridItem>
    </Grid>
  );
}
