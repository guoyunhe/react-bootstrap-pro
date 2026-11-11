import { Button, Tooltip } from 'react-bootstrap-pro';

export function TooltipInteractiveDemo() {
  return (
    <Tooltip
      trigger={
        <Button theme='primary' variant='solid'>
          Hover, then move onto the tip
        </Button>
      }
    >
      Read the <a href='https://getbootstrap.com/'>full docs</a> for more.
    </Tooltip>
  );
}
