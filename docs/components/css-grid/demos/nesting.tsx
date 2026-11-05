import { Grid, GridItem } from 'react-bootstrap-pro';

export function NestingGridDemo() {
  return (
    <Grid columns={3} className='text-center' overflowX='auto'>
      <div>
        First auto-column
        <Grid>
          <div>Auto-column</div>
          <div>Auto-column</div>
        </Grid>
      </div>
      <div>
        Second auto-column
        <Grid columns={12}>
          <GridItem span={6}>6 of 12</GridItem>
          <GridItem span={4}>4 of 12</GridItem>
          <GridItem span={2}>2 of 12</GridItem>
        </Grid>
      </div>
      <div>Third auto-column</div>
    </Grid>
  );
}
