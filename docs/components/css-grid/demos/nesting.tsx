import { Box, Grid, GridItem } from 'react-bootstrap-pro';

export function NestingGridDemo() {
  return (
    <Grid columns={3} className='text-center' overflowX='auto'>
      <Box bg='primary' bgo={10} rounded p={2}>
        First auto-column
        <Grid columns={3}>
          <Box bg='primary' bgo={10} rounded p={2}>
            Auto-column
          </Box>
          <Box bg='primary' bgo={10} rounded p={2}>
            Auto-column
          </Box>
        </Grid>
      </Box>
      <Box bg='primary' bgo={10} rounded p={2}>
        Second auto-column
        <Grid columns={12}>
          <GridItem span={6}>
            <Box bg='primary' bgo={10} rounded p={2}>
              6 of 12
            </Box>
          </GridItem>
          <GridItem span={4}>
            <Box bg='primary' bgo={10} rounded p={2}>
              4 of 12
            </Box>
          </GridItem>
          <GridItem span={2}>
            <Box bg='primary' bgo={10} rounded p={2}>
              2 of 12
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box bg='primary' bgo={10} rounded p={2}>
        Third auto-column
      </Box>
    </Grid>
  );
}
