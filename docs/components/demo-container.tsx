import { Box, type BoxProps } from 'react-bootstrap-pro';

import './demo-container.css';

export type DemoContainerProps = BoxProps<'div'>;

export function DemoContainer({ ...props }: DemoContainerProps) {
  return <Box border rounded p={5} my={5} className='demo-container' {...props} />;
}
