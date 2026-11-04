import { Tooltip } from 'react-bootstrap-pro';

import './custom-tooltip.css';

export function TooltipCustomDemo() {
  return (
    <Tooltip
      className='custom-tooltip'
      trigger={
        <button type='button' className='btn-solid theme-secondary'>
          Custom tooltip
        </button>
      }
    >
      This tooltip is themed with CSS variables.
    </Tooltip>
  );
}
