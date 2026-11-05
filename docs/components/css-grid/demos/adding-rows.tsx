import { Grid, GridItem } from 'react-bootstrap-pro';

export function AddingRowsDemo() {
  return (
    <Grid rows={3} columns={3} className='text-center'>
      <div>Auto-column</div>
      <GridItem start={2} style={{ gridRow: 2 }}>
        Auto-column
      </GridItem>
      <GridItem start={3} style={{ gridRow: 3 }}>
        Auto-column
      </GridItem>
    </Grid>
  );
}
