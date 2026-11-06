import { ChipInput } from 'react-bootstrap-pro';

export function ChipInputEmptyStateDemo() {
  return (
    <ChipInput
      theme='primary'
      placeholder='Type and press Enter'
      aria-label='Tags'
      dismissible={false}
    />
  );
}
