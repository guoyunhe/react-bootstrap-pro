import { Tooltip } from 'react-bootstrap-pro';

export function TooltipCustomContentDemo() {
  return (
    <Tooltip
      trigger={
        <button type='button' className='btn-solid theme-secondary'>
          Tooltip with React content
        </button>
      }
    >
      <em>Tooltip</em> <u>with</u> <b>React elements</b>
    </Tooltip>
  );
}
