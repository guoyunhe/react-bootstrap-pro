import { Input, InputGroup, InputGroupText } from 'react-bootstrap-pro';

export function InputGroupBorderRadiusDemo() {
  return (
    <InputGroup>
      <InputGroupText id='input-group-border-addon'>@</InputGroupText>
      <Input
        placeholder='Username'
        aria-label='Username'
        aria-describedby='input-group-border-addon'
      />
      <Input d='none' className='input-group-ignore' aria-label='Hidden input' />
    </InputGroup>
  );
}
