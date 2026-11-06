import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function CssGridDemo() {
  return (
    <Grid textAlign='center'>
      <GridItem span={4}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-4
        </Box>
      </GridItem>
      <GridItem span={4}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-4
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
