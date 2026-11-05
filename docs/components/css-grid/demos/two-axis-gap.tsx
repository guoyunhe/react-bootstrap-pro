import { Grid, GridItem } from 'react-bootstrap-pro';

export function TwoAxisGapDemo() {
  return (
    <Grid className='text-center' style={{ '--bs-gap': '.25rem 1rem' }}>
      <GridItem span={6}>.g-col-6</GridItem>
      <GridItem span={6}>.g-col-6</GridItem>
      <GridItem span={6}>.g-col-6</GridItem>
      <GridItem span={6}>.g-col-6</GridItem>
    </Grid>
  );
}
