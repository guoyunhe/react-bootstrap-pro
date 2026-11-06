import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function ResponsiveGridDemo() {
  return (
    <Grid textAlign='center'>
      <GridItem span={{ xs: 6, md: 4 }}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-6 .md:g-col-4
        </Box>
      </GridItem>
      <GridItem span={{ xs: 6, md: 4 }}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-6 .md:g-col-4
        </Box>
      </GridItem>
      <GridItem span={{ xs: 6, md: 4 }}>
        <Box bg='primary' bgo={10} rounded p={2}>
          .g-col-6 .md:g-col-4
        </Box>
      </GridItem>
    </Grid>
  );
}
