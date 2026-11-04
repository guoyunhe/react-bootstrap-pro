import { Tooltip } from 'react-bootstrap-pro';

export function TooltipResponsivePlacementDemo() {
  return (
    <div className='d-flex flex-wrap justify-content-center gap-3'>
      <Tooltip
        placement={{ xs: 'top', md: 'right', lg: 'bottom' }}
        trigger={
          <button type='button' className='btn-solid theme-secondary'>
            Top → md: right → lg: bottom
          </button>
        }
      >
        Responsive tooltip
      </Tooltip>
      <Tooltip
        placement={{ xs: 'left', lg: 'top' }}
        trigger={
          <button type='button' className='btn-solid theme-secondary'>
            Left → lg: top
          </button>
        }
      >
        Responsive tooltip
      </Tooltip>
    </div>
  );
}
