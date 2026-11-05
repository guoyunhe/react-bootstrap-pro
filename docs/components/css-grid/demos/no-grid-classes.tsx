import { Grid } from 'react-bootstrap-pro';

export function NoGridClassesDemo() {
  return (
    <Grid columns={3} className='text-center'>
      <div>Auto-column</div>
      <div>Auto-column</div>
      <div>Auto-column</div>
    </Grid>
  );
}
