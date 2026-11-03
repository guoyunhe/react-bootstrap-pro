import { ChipInput } from 'react-bootstrap-pro';

export function ChipInputDisabledDemo() {
  return (
    <ChipInput
      theme='primary'
      defaultValue={['Read only']}
      disabled
      placeholder='Disabled...'
      aria-label='Read only tags'
    />
  );
}
