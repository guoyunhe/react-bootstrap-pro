import { Grid, GridItem } from 'react-bootstrap-pro';

export function RowGapDemo() {
  return (
    <Grid className='text-center' style={{ rowGap: 0 }}>
      <GridItem span={6}>.g-col-6</GridItem>
      <GridItem span={6}>.g-col-6</GridItem>
      <GridItem span={6}>.g-col-6</GridItem>
      <GridItem span={6}>.g-col-6</GridItem>
    </Grid>
  );
}
