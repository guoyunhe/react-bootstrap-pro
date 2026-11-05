import { Grid, GridItem } from 'react-bootstrap-pro';

export function TwoColumnsGridDemo() {
  return (
    <Grid className='text-center'>
      <GridItem span={6}>.g-col-6</GridItem>
      <GridItem span={6}>.g-col-6</GridItem>
    </Grid>
  );
}
