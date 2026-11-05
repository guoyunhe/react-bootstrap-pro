import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  FormControl,
  InputGroup,
  InputGroupText,
} from 'react-bootstrap-pro';

export function ButtonToolbarInputDemo() {
  return (
    <ButtonToolbar aria-label='Toolbar with input group' gap={2}>
      <ButtonGroup aria-label='First group'>
        <Button variant='outline' theme='secondary'>
          1
        </Button>
        <Button variant='outline' theme='secondary'>
          2
        </Button>
        <Button variant='outline' theme='secondary'>
          3
        </Button>
        <Button variant='outline' theme='secondary'>
          4
        </Button>
      </ButtonGroup>
      <InputGroup>
        <InputGroupText id='button-toolbar-input-addon'>@</InputGroupText>
        <FormControl
          placeholder='Input group example'
          aria-label='Input group example'
          aria-describedby='button-toolbar-input-addon'
        />
      </InputGroup>
    </ButtonToolbar>
  );
}
