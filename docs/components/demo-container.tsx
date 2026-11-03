import { Box, type BoxProps } from 'react-bootstrap-pro';

export type DemoContainerProps = BoxProps<'div'>;

export function DemoContainer({ className, ...props }: DemoContainerProps) {
  return <Box border rounded padding={5} marginY={5} {...props} className={className} />;
}
