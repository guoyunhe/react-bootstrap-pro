import { Box, Button } from 'react-bootstrap-pro';

import { themeOptions, variantOptions } from './shared';

export function ButtonVariantsDemo() {
  return (
    <Box display='grid' gap={2} style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
      {themeOptions.flatMap((theme) =>
        variantOptions.slice(0, 4).map((variant) => (
          <Button key={`${theme}-${variant}`} variant={variant} theme={theme} w={100}>
            {`${theme} ${variant}`}
          </Button>
        )),
      )}
    </Box>
  );
}
