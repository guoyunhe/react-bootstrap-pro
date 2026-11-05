import { Grid, GridItem } from 'react-bootstrap-pro';

export function SassColumnsDemo() {
  return (
    <Grid columns={18} style={{ '--bs-gap': '.5rem' }} className='text-center'>
      <GridItem style={{ gridColumn: 'span 14' }}>14 columns</GridItem>
      <GridItem span={4}>.g-col-4</GridItem>
    </Grid>
  );
}
