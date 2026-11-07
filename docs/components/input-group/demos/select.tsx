import { Box, InputGroupButton, InputGroup, InputGroupText, Select } from 'react-bootstrap-pro';

export function InputGroupSelectDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <InputGroupText component='label' htmlFor='group-select-start'>
          Options
        </InputGroupText>
        <Select id='group-select-start' defaultValue=''>
          <option value=''>Choose...</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Select>
      </InputGroup>
      <InputGroup>
        <Select id='group-select-end' defaultValue=''>
          <option value=''>Choose...</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Select>
        <InputGroupText component='label' htmlFor='group-select-end'>
          Options
        </InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupButton type='button' variant='outline' theme='secondary'>
          Button
        </InputGroupButton>
        <Select aria-label='Select with leading button' defaultValue=''>
          <option value=''>Choose...</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Select>
      </InputGroup>
      <InputGroup>
        <Select aria-label='Select with trailing button' defaultValue=''>
          <option value=''>Choose...</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Select>
        <InputGroupButton type='button' variant='outline' theme='secondary'>
          Button
        </InputGroupButton>
      </InputGroup>
    </Box>
  );
}
