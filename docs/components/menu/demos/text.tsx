import type { CSSProperties } from 'react';
import { Box, Menu } from 'react-bootstrap-pro';

export function MenuTextDemo() {
  return (
    <Menu
      show
      position='static'
      p={3}
      fg='2'
      style={{ '--bs-menu-min-width': '240px' } as CSSProperties}
    >
      <p>Some example text that’s free-flowing within the menu.</p>
      <Box component='p' mb={0}>
        And this is more example text.
      </Box>
    </Menu>
  );
}
