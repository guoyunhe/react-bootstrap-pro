import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupLinksDemo() {
  return (
    <ButtonGroup aria-label='Page navigation'>
      <Button
        component='a'
        variant='solid'
        theme='primary'
        href='#current-page'
        active
        aria-current='page'
      >
        Active link
      </Button>
      <Button component='a' variant='solid' theme='primary' href='#previous-page'>
        Link
      </Button>
      <Button component='a' variant='solid' theme='primary' href='#next-page'>
        Link
      </Button>
    </ButtonGroup>
  );
}
