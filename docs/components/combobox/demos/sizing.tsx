import { Box, Combobox } from 'react-bootstrap-pro';

const options = [
  { value: '1', label: 'Option one' },
  { value: '2', label: 'Option two' },
];

export function ComboboxSizingDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <Combobox size='sm' options={options} placeholder='Small select…' aria-label='Small select' />
      <Combobox options={options} placeholder='Default select…' aria-label='Default select' />
      <Combobox size='lg' options={options} placeholder='Large select…' aria-label='Large select' />
      <Combobox
        disabled
        options={options}
        placeholder='Cannot interact…'
        aria-label='Disabled select'
      />
    </Box>
  );
}
