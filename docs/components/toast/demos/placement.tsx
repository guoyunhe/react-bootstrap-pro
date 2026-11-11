import { useState } from 'react';
import {
  Box,
  FormField,
  FormLabel,
  Select,
  Toast,
  ToastBody,
  ToastHeader,
} from 'react-bootstrap-pro';

const placements = {
  'top-left': { top: 0, start: 0 },
  'top-center': { top: 0, start: 50, translateMiddle: 'x' },
  'top-right': { top: 0, end: 0 },
  'middle-left': { top: 50, start: 0, translateMiddle: 'y' },
  'middle-center': { top: 50, start: 50, translateMiddle: true },
  'middle-right': { top: 50, end: 0, translateMiddle: 'y' },
  'bottom-left': { bottom: 0, start: 0 },
  'bottom-center': { bottom: 0, start: 50, translateMiddle: 'x' },
  'bottom-right': { bottom: 0, end: 0 },
} as const;

type Placement = keyof typeof placements;

export function ToastPlacementDemo() {
  const [placement, setPlacement] = useState<Placement>('top-right');

  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormField>
        <FormLabel htmlFor='toast-placement'>Toast placement</FormLabel>
        <Select
          id='toast-placement'
          value={placement}
          onChange={(event) => setPlacement(event.target.value as Placement)}
        >
          {Object.keys(placements).map((key) => (
            <option key={key} value={key}>
              {key
                .split('-')
                .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                .join(' ')}
            </option>
          ))}
        </Select>
      </FormField>
      <Box position='relative' bg='1' rounded p={3} style={{ minHeight: 240 }}>
        <Toast show position='absolute' {...placements[placement]}>
          <ToastHeader>
            <Box component='strong' me='auto'>
              Bootstrap
            </Box>
            <small>11 mins ago</small>
          </ToastHeader>
          <ToastBody>Hello, world! This is a toast message.</ToastBody>
        </Toast>
      </Box>
    </Box>
  );
}
