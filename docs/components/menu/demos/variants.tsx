import { Box, Menu, MenuItem, type Theme } from 'react-bootstrap-pro';

export function MenuVariantsDemo() {
  const themes: Theme[] = ['primary', 'secondary', 'success', 'danger'];
  return (
    <Box d='flex' flexWrap='wrap' gap={3}>
      {[false, true].map((active) => (
        <Menu key={String(active)} show position='static'>
          {themes.map((theme) => (
            <MenuItem key={theme} href='#' active={active} theme={theme}>
              {theme} link
            </MenuItem>
          ))}
        </Menu>
      ))}
    </Box>
  );
}
