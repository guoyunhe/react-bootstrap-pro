import { Box, Tooltip } from 'react-bootstrap-pro';

export function TooltipLinksDemo() {
  return (
    <Box component='p' fg='3'>
      Placeholder text to demonstrate some{' '}
      <Tooltip trigger={<a href='#inline-links'>inline links</a>}>Default tooltip</Tooltip> with
      tooltips. This is filler text to show how{' '}
      <Tooltip trigger={<a href='#real-text'>real text</a>}>Another tooltip</Tooltip> can appear
      within a paragraph, alongside{' '}
      <Tooltip trigger={<a href='#these-tooltips'>these tooltips on links</a>}>
        Another one here too
      </Tooltip>{' '}
      and <Tooltip trigger={<a href='#your-own'>your own</a>}>The last tip!</Tooltip> links.
    </Box>
  );
}
