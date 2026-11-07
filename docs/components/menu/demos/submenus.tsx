import { Box, Button, Menu, MenuDivider, MenuItem } from 'react-bootstrap-pro';

export function MenuSubmenusDemo() {
  const groups = [
    { label: 'File', actions: ['New', 'Open', 'Save'] },
    { label: 'Edit', actions: ['Cut', 'Copy', 'Paste'] },
    { label: 'View', actions: ['Zoom in', 'Zoom out'] },
  ];
  return (
    <Menu
      trigger={
        <Button variant='solid' theme='secondary'>
          Submenus
        </Button>
      }
    >
      {groups.map(({ label, actions }) => (
        <Box key={label} className='submenu'>
          <Menu
            placement='right-start'
            trigger={
              <MenuItem component='button' type='button'>
                {label}
              </MenuItem>
            }
          >
            {actions.map((action) => (
              <MenuItem key={action} href='#'>
                {action}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ))}
      <MenuDivider />
      <MenuItem href='#'>Preferences</MenuItem>
    </Menu>
  );
}
