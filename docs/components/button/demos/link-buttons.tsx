import { Box, Button } from 'react-bootstrap-pro';

import { themeOptions } from './shared';

export function ButtonLinkDemo() {
  return (
    <Box display='flex' flexWrap='wrap' gap={2}>
      <Button variant='link'>Default link</Button>
      {themeOptions.map((theme) => (
        <Button key={theme} variant='link' theme={theme}>
          {theme}
        </Button>
      ))}
    </Box>
  );
}
