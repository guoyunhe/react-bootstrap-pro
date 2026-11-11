import { BiQuestionCircle } from 'react-bootstrap-icons-pro';
import { Box, Tooltip } from 'react-bootstrap-pro';

export function TooltipSvgTriggerDemo() {
  return (
    <Tooltip
      trigger={
        <Box
          component='a'
          href='https://example.com'
          d='inline-block'
          fg='primary'
          aria-label='Hover or focus to see the tooltip'
        >
          <BiQuestionCircle size={50} aria-hidden='true' />
        </Box>
      }
    >
      Default tooltip
    </Tooltip>
  );
}
