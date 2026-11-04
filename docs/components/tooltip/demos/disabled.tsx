/* oxlint-disable jsx-a11y/no-noninteractive-tabindex -- The disabled-control wrapper must be keyboard focusable. */
import { Tooltip } from 'react-bootstrap-pro';

export function TooltipDisabledDemo() {
  return (
    <Tooltip
      trigger={
        <span className='d-inline-block' tabIndex={0}>
          <button type='button' className='btn-solid theme-primary' disabled>
            Disabled button
          </button>
        </span>
      }
    >
      Disabled tooltip
    </Tooltip>
  );
}
