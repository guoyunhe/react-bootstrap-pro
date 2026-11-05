import { Grid, GridItem } from 'react-bootstrap-pro';

export function CssGridPlaygroundDemo() {
  return (
    <div
      style={{
        resize: 'horizontal',
        overflow: 'auto',
        width: '100%',
        maxWidth: '100%',
        minWidth: '16rem',
      }}
    >
      <Grid className='text-center'>
        <GridItem span={{ xs: 6, md: 4 }}>.g-col-6 .md:g-col-4</GridItem>
        <GridItem span={{ xs: 6, md: 4 }}>.g-col-6 .md:g-col-4</GridItem>
        <GridItem span={{ xs: 6, md: 4 }}>.g-col-6 .md:g-col-4</GridItem>
      </Grid>
    </div>
  );
}
