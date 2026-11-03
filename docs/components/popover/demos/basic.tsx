import { Popover, PopoverHeader, PopoverBody } from 'react-bootstrap-pro';

export function PopoverBasicDemo() {
  return (
    <Popover show placement='top'>
      <PopoverHeader>Popover title</PopoverHeader>
      <PopoverBody>Popover content</PopoverBody>
    </Popover>
  );
}
