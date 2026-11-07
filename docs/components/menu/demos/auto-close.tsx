import { Box, Button, Menu, MenuItem, type MenuAutoClose } from 'react-bootstrap-pro';

export function MenuAutoCloseDemo() {
  const options: [string, MenuAutoClose][] = [
    ['Default menu', true],
    ['Clickable inside', 'inside'],
    ['Clickable outside', 'outside'],
    ['Manual close', false],
  ];
  return (
    <Box d='flex' flexWrap='wrap' gap={2}>
      {options.map(([label, mode]) => (
        <Box key={label}>
          <Menu
            autoClose={mode}
            trigger={
              <Button variant='solid' theme='secondary'>
                {label}
              </Button>
            }
          >
            {[1, 2, 3].map((item) => (
              <MenuItem key={item} component='button' type='button'>
                Menu item {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ))}
    </Box>
  );
}
