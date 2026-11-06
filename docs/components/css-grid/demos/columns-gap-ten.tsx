import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function ColumnsGapTenDemo() {
  return (
    <Grid columns={10} gridGap='1rem' textAlign='center'>
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
