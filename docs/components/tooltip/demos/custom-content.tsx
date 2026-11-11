import { Button, Tooltip } from 'react-bootstrap-pro';

export function TooltipCustomContentDemo() {
  return (
    <Tooltip
      trigger={
        <Button theme='secondary' variant='solid'>
          Tooltip with React content
        </Button>
      }
    >
      <em>Tooltip</em> <u>with</u> <b>React elements</b>
    </Tooltip>
  );
}
