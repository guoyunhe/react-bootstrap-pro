import { FormLabel, Range } from 'react-bootstrap-pro';

export function RangeBubbleDemo() {
  return (
    <>
      <FormLabel htmlFor='range-bubble'>Brightness</FormLabel>
      <Range
        id='range-bubble'
        min={0}
        max={100}
        defaultValue={60}
        bubble
        format={(value) => `${value}%`}
      />
    </>
  );
}
