import { Button, Tooltip } from 'react-bootstrap-pro';

export function TooltipBasicDemo() {
  return (
    <Tooltip
      trigger={
        <Button theme='primary' variant='solid'>
          Example tooltip
        </Button>
      }
    >
      Tooltip on top
    </Tooltip>
  );
}
