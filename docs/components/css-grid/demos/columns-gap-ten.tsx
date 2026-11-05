import { Grid, GridItem } from 'react-bootstrap-pro';

export function ColumnsGapTenDemo() {
  return (
    <Grid columns={10} style={{ '--bs-gap': '1rem' }} className='text-center'>
      <GridItem span={6}>.g-col-6</GridItem>
      <GridItem span={4}>.g-col-4</GridItem>
    </Grid>
  );
}
