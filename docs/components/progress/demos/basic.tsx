import { Progress, ProgressBar } from 'react-bootstrap-pro';

export function ProgressBasicDemo() {
  return (
    <Progress label='Upload' value={65}>
      <ProgressBar value={65}>65%</ProgressBar>
    </Progress>
  );
}
