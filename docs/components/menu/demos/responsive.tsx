import { useSyncExternalStore } from 'react';
import { Box, Button, Menu, MenuItem, type MenuPlacement } from 'react-bootstrap-pro';

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getWidth() {
  return window.innerWidth;
}

export function MenuResponsiveDemo() {
  const width = useSyncExternalStore(subscribe, getWidth, () => 0);
  const examples: [string, MenuPlacement][] = [
    ['Bottom start → md:bottom-end', width >= 768 ? 'bottom-end' : 'bottom-start'],
    ['Bottom → lg:right', width >= 1024 ? 'right' : 'bottom'],
    ['Multi-breakpoint', width >= 1280 ? 'bottom-start' : width >= 768 ? 'right-start' : 'top-end'],
  ];
  return (
    <Box d='flex' flexWrap='wrap' gap={2}>
      {examples.map(([label, placement]) => (
        <Box key={label}>
          <Menu
            placement={placement}
            trigger={
              <Button variant='solid' theme='secondary'>
                {label}
              </Button>
            }
          >
            <MenuItem href='#'>Action</MenuItem>
            <MenuItem href='#'>Another action</MenuItem>
          </Menu>
        </Box>
      ))}
    </Box>
  );
}
