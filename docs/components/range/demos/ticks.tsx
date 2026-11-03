import { FormLabel, Range } from 'react-bootstrap-pro';

const temperatureTicks = [
  { value: 0, label: 'Cold' },
  { value: 25 },
  { value: 50, label: 'Mild' },
  { value: 75 },
  { value: 100, label: 'Hot' },
] as const;

export function RangeTicksDemo() {
  return (
    <>
      <FormLabel htmlFor='range-ticks'>Temperature</FormLabel>
      <Range
        id='range-ticks'
        min={0}
        max={100}
        step={25}
        defaultValue={50}
        ticks={temperatureTicks}
      />
    </>
  );
}
