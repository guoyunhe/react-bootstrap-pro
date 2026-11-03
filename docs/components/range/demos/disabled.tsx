import { FormLabel, Range } from 'react-bootstrap-pro';

export function RangeDisabledDemo() {
  return (
    <>
      <FormLabel htmlFor='range-disabled'>Disabled range</FormLabel>
      <Range id='range-disabled' defaultValue={50} disabled />
    </>
  );
}
