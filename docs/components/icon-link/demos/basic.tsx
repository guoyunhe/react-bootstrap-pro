import { BiArrowRight } from 'react-bootstrap-icons-pro';
import { Box, IconLink } from 'react-bootstrap-pro';

export function IconLinkBasicDemo() {
  return (
    <Box d='flex' flexDirection='column' alignItems='start' gap={2}>
      <IconLink href='#icon-link-example'>
        <BiArrowRight aria-hidden='true' />
        Documentation
      </IconLink>
      <IconLink href='#icon-link-example' hover>
        Read more
        <BiArrowRight aria-hidden='true' />
      </IconLink>
    </Box>
  );
}
