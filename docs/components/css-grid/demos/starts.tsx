import { Grid, GridItem } from 'react-bootstrap-pro';

export function StartsGridDemo() {
  return (
    <Grid className='text-center'>
      <GridItem span={3} start={2}>
        .g-col-3 .g-start-2
      </GridItem>
      <GridItem span={4} start={6}>
        .g-col-4 .g-start-6
      </GridItem>
    </Grid>
  );
}
