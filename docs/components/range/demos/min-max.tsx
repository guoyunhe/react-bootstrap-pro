import { FormLabel, Range } from 'react-bootstrap-pro';

export function RangeMinMaxDemo() {
  return (
    <>
      <FormLabel htmlFor='range-min-max'>Example range</FormLabel>
      <Range id='range-min-max' min={0} max={5} defaultValue={3} />
    </>
  );
}
