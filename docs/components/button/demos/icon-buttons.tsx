import { BiPlus } from 'react-bootstrap-icons-pro';
import { Box, IconButton } from 'react-bootstrap-pro';

export function ButtonIconDemo() {
  return (
    <Box display='flex' flexWrap='wrap' alignItems='center' gap={2}>
      <IconButton variant='solid' theme='primary' aria-label='Add item'>
        <BiPlus size={16} aria-hidden='true' />
      </IconButton>
      <IconButton variant='solid' theme='primary' aria-label='Add item' size='xs'>
        <BiPlus size={12} aria-hidden='true' />
      </IconButton>
      <IconButton variant='solid' theme='primary' aria-label='Add item' size='sm'>
        <BiPlus size={14} aria-hidden='true' />
      </IconButton>
      <IconButton variant='solid' theme='primary' aria-label='Add item' size='lg'>
        <BiPlus size={20} aria-hidden='true' />
      </IconButton>
    </Box>
  );
}
