import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function CssGridPlaygroundDemo() {
  return (
    <Box
      style={{
        resize: 'horizontal',
        overflow: 'auto',
        width: '100%',
        maxWidth: '100%',
        minWidth: '16rem',
      }}
    >
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
    </Box>
  );
}
