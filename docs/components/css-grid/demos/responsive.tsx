import { Grid, GridItem } from 'react-bootstrap-pro';

export function ResponsiveGridDemo() {
  return (
    <Grid className='text-center'>
      <GridItem span={{ xs: 6, md: 4 }}>.g-col-6 .md:g-col-4</GridItem>
      <GridItem span={{ xs: 6, md: 4 }}>.g-col-6 .md:g-col-4</GridItem>
      <GridItem span={{ xs: 6, md: 4 }}>.g-col-6 .md:g-col-4</GridItem>
    </Grid>
  );
}
