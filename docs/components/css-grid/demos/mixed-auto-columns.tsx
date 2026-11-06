import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function MixedAutoColumnsGridDemo() {
  return (
    <Grid textAlign='center'>
      <GridItem span={6}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-6
        </Box>
      </GridItem>
      <Box bg='primary' bgo={10} rounded p={2}>
        1
      </Box>
      <Box bg='primary' bgo={10} rounded p={2}>
        1
      </Box>
      <Box bg='primary' bgo={10} rounded p={2}>
        1
      </Box>
      <Box bg='primary' bgo={10} rounded p={2}>
        1
      </Box>
      <Box bg='primary' bgo={10} rounded p={2}>
        1
      </Box>
      <Box bg='primary' bgo={10} rounded p={2}>
        1
      </Box>
    </Grid>
  );
}
