import { useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, useColorScheme } from 'react-bootstrap-pro';
import type { ColorScheme } from 'react-bootstrap-pro';

const modes: ColorScheme[] = ['light', 'dark', 'auto'];

export function UseColorSchemeDemo() {
  const colorScheme = useColorScheme();
  const [mode, setMode] = useState<ColorScheme>('auto');

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'auto') {
      delete root.dataset.bsTheme;
    } else {
      root.dataset.bsTheme = mode;
    }
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    const initialTheme = root.dataset.bsTheme;
    return () => {
      if (initialTheme === undefined) {
        delete root.dataset.bsTheme;
      } else {
        root.dataset.bsTheme = initialTheme;
      }
    };
  }, []);

  return (
    <Box d='grid' gap={3}>
      <ButtonGroup aria-label='Site color scheme'>
        {modes.map((item) => (
          <Button
            key={item}
            variant='outline'
            theme='secondary'
            active={mode === item}
            onClick={() => setMode(item)}
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
      <Box fg='2'>
        Effective color scheme: <strong>{colorScheme}</strong>
      </Box>
    </Box>
  );
}
