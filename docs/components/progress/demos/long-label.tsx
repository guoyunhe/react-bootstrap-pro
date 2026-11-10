import { Progress } from 'react-bootstrap-pro';

export function ProgressLongLabelDemo() {
  return (
    <Progress label='Example with long label' value={10} barProps={{ overflow: 'visible' }}>
      Long label that overflows
    </Progress>
  );
}
