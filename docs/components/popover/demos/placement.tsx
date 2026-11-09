import { Box, Button, Popover, PopoverBody, type PopoverPlacement } from 'react-bootstrap-pro';

const placements: { label: string; placement: PopoverPlacement }[] = [
  { label: 'left', placement: 'start' },
  { label: 'top', placement: 'top' },
  { label: 'bottom', placement: 'bottom' },
  { label: 'right', placement: 'end' },
];

export function PopoverPlacementDemo() {
  return (
    <Box d='flex' flexWrap='wrap' gap={2} py={5}>
      {placements.map(({ label, placement }) => (
        <Popover
          key={placement}
          placement={placement}
          trigger={
            <Button variant='solid' theme='secondary'>
              Popover on {label}
            </Button>
          }
        >
          <PopoverBody>Popover on {label}</PopoverBody>
        </Popover>
      ))}
    </Box>
  );
}
