import { useLocalStorage } from '@guoyunhe/react-storage';
import {
  Box,
  Button,
  ButtonGroup,
  colorSchemeStorageKey,
  useColorScheme,
} from 'react-bootstrap-pro';
import type { ColorScheme } from 'react-bootstrap-pro';

const modes: ColorScheme[] = ['light', 'dark', 'auto'];

export function UseColorSchemeDemo() {
  const [colorScheme, setColorScheme] = useColorScheme();
  const [selectedColorScheme] = useLocalStorage<ColorScheme>(colorSchemeStorageKey, 'auto');

  return (
    <Box d='grid' gap={3}>
      <ButtonGroup aria-label='Site color scheme'>
        {modes.map((item) => (
          <Button
            key={item}
            variant='outline'
            theme='secondary'
            active={selectedColorScheme === item}
            onClick={() => setColorScheme(item)}
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
