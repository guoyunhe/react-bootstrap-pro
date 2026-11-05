import { Grid, GridItem } from 'react-bootstrap-pro';

export function CssGridDemo() {
  return (
    <Grid className='text-center'>
      <GridItem span={4}>.g-col-4</GridItem>
      <GridItem span={4}>.g-col-4</GridItem>
      <GridItem span={4}>.g-col-4</GridItem>
    </Grid>
  );
}
