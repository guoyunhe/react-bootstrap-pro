import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function TwoColumnsGridDemo() {
  return (
    <Grid textAlign='center'>
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
