import { Tooltip } from 'react-bootstrap-pro';

export function TooltipBasicDemo() {
  return (
    <Tooltip
      trigger={
        <button type='button' className='btn-solid theme-primary'>
          Hover or focus me
        </button>
      }
    >
      Helpful context
    </Tooltip>
  );
}
