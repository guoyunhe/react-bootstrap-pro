import { Grid, GridItem } from 'react-bootstrap-pro';

export function MixedAutoColumnsGridDemo() {
  return (
    <Grid className='text-center'>
      <GridItem span={6}>.g-col-6</GridItem>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </Grid>
  );
}
