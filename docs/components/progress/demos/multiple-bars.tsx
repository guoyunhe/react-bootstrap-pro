import { Progress, ProgressStacked } from 'react-bootstrap-pro';

export function ProgressMultipleBarsDemo() {
  return (
    <ProgressStacked label='Project files'>
      <Progress label='Segment one' value={15} />
      <Progress label='Segment two' value={30} theme='success' />
      <Progress label='Segment three' value={20} theme='info' />
    </ProgressStacked>
  );
}
