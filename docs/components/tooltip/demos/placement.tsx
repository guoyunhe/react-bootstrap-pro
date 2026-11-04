import { Tooltip } from 'react-bootstrap-pro';

export function TooltipPlacementDemo() {
  return (
    <div className='d-flex flex-wrap justify-content-center gap-3'>
      <Tooltip
        placement='left'
        trigger={
          <button type='button' className='btn-solid theme-secondary'>
            Tooltip on left
          </button>
        }
      >
        Tooltip on left
      </Tooltip>
      <Tooltip
        placement='top'
        trigger={
          <button type='button' className='btn-solid theme-secondary'>
            Tooltip on top
          </button>
        }
      >
        Tooltip on top
      </Tooltip>
      <Tooltip
        placement='bottom'
        trigger={
          <button type='button' className='btn-solid theme-secondary'>
            Tooltip on bottom
          </button>
        }
      >
        Tooltip on bottom
      </Tooltip>
      <Tooltip
        placement='right'
        trigger={
          <button type='button' className='btn-solid theme-secondary'>
            Tooltip on right
          </button>
        }
      >
        Tooltip on right
      </Tooltip>
    </div>
  );
}
