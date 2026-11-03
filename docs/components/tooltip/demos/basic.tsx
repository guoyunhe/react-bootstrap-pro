import { Tooltip, TooltipInner } from 'react-bootstrap-pro';

export function TooltipBasicDemo() {
  return (
    <Tooltip show>
      <TooltipInner>Helpful context</TooltipInner>
    </Tooltip>
  );
}
