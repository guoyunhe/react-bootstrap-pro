import { useState } from 'react';
import {
  Box,
  Button,
  FormLabel,
  Menu,
  MenuItem,
  Select,
  type MenuPlacement,
} from 'react-bootstrap-pro';

export function MenuPlacementDemo() {
  const [placement, setPlacement] = useState<MenuPlacement>('bottom-start');
  const placements: MenuPlacement[] = ['top', 'bottom', 'left', 'right'].flatMap((direction) => [
    direction,
    `${direction}-start`,
    `${direction}-end`,
  ]) as MenuPlacement[];
  return (
    <Box d='flex' flexDirection='column' alignItems='start' gap={3}>
      <Box>
        <FormLabel htmlFor='menu-placement'>Placement</FormLabel>
        <Select
          id='menu-placement'
          value={placement}
          onChange={(event) => {
            const value = placements.find((item) => item === event.currentTarget.value);
            if (value) setPlacement(value);
          }}
        >
          {placements.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </Box>
      <PlacementMenu key={placement} placement={placement} />
    </Box>
  );
}

function PlacementMenu({ placement }: { placement: MenuPlacement }) {
  return (
    <Menu
      placement={placement}
      trigger={
        <Button variant='solid' theme='primary'>
          Toggle menu
        </Button>
      }
    >
      <MenuItem component='button' type='button'>
        Action
      </MenuItem>
      <MenuItem component='button' type='button'>
        Another action
      </MenuItem>
      <MenuItem component='button' type='button'>
        Something else here
      </MenuItem>
    </Menu>
  );
}
