import { Box, FormLabel, Range } from 'react-bootstrap-pro';

export function RangeStepsDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box>
        <FormLabel htmlFor='range-min-max'>Custom min and max</FormLabel>
        <Range id='range-min-max' min={0} max={5} defaultValue={3} />
      </Box>
      <Box>
        <FormLabel htmlFor='range-step'>Half steps</FormLabel>
        <Range id='range-step' min={0} max={5} step={0.5} defaultValue={2.5} />
      </Box>
    </Box>
  );
}
