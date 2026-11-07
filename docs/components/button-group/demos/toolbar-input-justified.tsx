import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Input,
  InputGroup,
  InputGroupText,
} from 'react-bootstrap-pro';

export function ButtonToolbarJustifiedInputDemo() {
  return (
    <ButtonToolbar aria-label='Toolbar with input group' d='flex' justifyContent='between' gap={2}>
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
        <InputGroupText id='button-toolbar-justified-input-addon'>@</InputGroupText>
        <Input
          placeholder='Input group example'
          aria-label='Input group example'
          aria-describedby='button-toolbar-justified-input-addon'
        />
      </InputGroup>
    </ButtonToolbar>
  );
}
