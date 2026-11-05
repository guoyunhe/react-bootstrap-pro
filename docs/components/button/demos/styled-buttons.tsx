import { Box, Button } from 'react-bootstrap-pro';

import { themeOptions } from './shared';

export function ButtonStyledDemo() {
  return (
    <Box d='flex' flexWrap='wrap' gap={2}>
      {themeOptions.map((theme) => (
        <Button key={theme} variant='solid' theme={theme} styled>
          {theme}
        </Button>
      ))}
    </Box>
  );
}
