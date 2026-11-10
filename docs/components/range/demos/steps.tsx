import { FormLabel, Range } from 'react-bootstrap-pro';

export function RangeStepsDemo() {
  return (
    <>
      <FormLabel htmlFor='range-step'>Example range</FormLabel>
      <Range id='range-step' min={0} max={5} step={0.5} defaultValue={2.5} />
    </>
  );
}
