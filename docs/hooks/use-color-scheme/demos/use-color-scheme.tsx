import { Box, Button, ButtonGroup, ColorSchemeProvider, useColorScheme } from 'react-bootstrap-pro';
import type { ColorScheme } from 'react-bootstrap-pro';

const modes: ColorScheme[] = ['light', 'dark', 'auto'];

export function UseColorSchemeDemo() {
  return (
    <ColorSchemeProvider>
      <ColorSchemeControls />
    </ColorSchemeProvider>
  );
}

function ColorSchemeControls() {
  const { colorScheme, computedColorScheme, setColorScheme } = useColorScheme();

  return (
    <Box d='grid' gap={3}>
      <ButtonGroup aria-label='Site color scheme'>
        {modes.map((item) => (
          <Button
            key={item}
            variant='outline'
            theme='secondary'
            active={colorScheme === item}
            onClick={() => setColorScheme(item)}
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
      <Box fg='2'>
        Selected color scheme: <strong>{colorScheme}</strong>
      </Box>
      <Box fg='2'>
        Effective color scheme: <strong>{computedColorScheme}</strong>
      </Box>
    </Box>
  );
}
