import { Button, Tooltip } from 'react-bootstrap-pro';

import './custom-tooltip.css';

export function TooltipCustomDemo() {
  return (
    <Tooltip
      className='custom-tooltip'
      trigger={
        <Button theme='secondary' variant='solid'>
          Custom tooltip
        </Button>
      }
    >
      This tooltip is themed with CSS variables.
    </Tooltip>
  );
}
