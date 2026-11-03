import { FormLabel, Range } from 'react-bootstrap-pro';

export function RangeBasicDemo() {
  return (
    <>
      <FormLabel htmlFor='range-basic'>Example range</FormLabel>
      <Range id='range-basic' defaultValue={50} />
    </>
  );
}
