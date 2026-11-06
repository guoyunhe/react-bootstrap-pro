import { ChipInput } from 'react-bootstrap-pro';

export function ChipInputIndividualThemesDemo() {
  return (
    <ChipInput
      theme='primary'
      defaultValue={['Bug', 'Critical']}
      chipProps={(value) => ({ theme: value === 'Bug' ? 'warning' : 'danger' })}
      placeholder='Add issue'
      aria-label='Issue severities'
      dismissible={false}
    />
  );
}
