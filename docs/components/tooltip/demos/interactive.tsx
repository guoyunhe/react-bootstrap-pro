import { Tooltip } from 'react-bootstrap-pro';

export function TooltipInteractiveDemo() {
  return (
    <Tooltip
      trigger={
        <button type='button' className='btn-solid theme-primary'>
          Hover, then move onto the tip
        </button>
      }
    >
      Read the <a href='https://getbootstrap.com/'>full docs</a> for more.
    </Tooltip>
  );
}
