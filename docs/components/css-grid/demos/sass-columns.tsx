import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function SassColumnsDemo() {
  return (
    <Grid columns={18} gridGap='.5rem' textAlign='center'>
      <GridItem style={{ gridColumn: 'span 14' }}>
        <Box bg='primary' bgo={10} rounded p={2}>
          14 columns
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
