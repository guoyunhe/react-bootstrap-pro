import { ChipInput } from 'react-bootstrap-pro';

export function ChipInputDemo() {
  return (
    <ChipInput
      id='chips-basic'
      label='Skills:'
      theme='primary'
      defaultValue={['JavaScript', 'TypeScript']}
      placeholder='Add more…'
      dismissible={false}
    />
  );
}
