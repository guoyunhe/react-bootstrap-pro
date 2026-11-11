/* oxlint-disable jsx-a11y/no-noninteractive-tabindex -- The disabled-control wrapper must be keyboard focusable. */
import { Button, Tooltip } from 'react-bootstrap-pro';

export function TooltipDisabledDemo() {
  return (
    <Tooltip
      trigger={
        <span className='d-inline-block' tabIndex={0}>
          <Button theme='primary' variant='solid' disabled style={{ pointerEvents: 'none' }}>
            Disabled button
          </Button>
        </span>
      }
    >
      Disabled tooltip
    </Tooltip>
  );
}
