import type { HTMLAttributes } from 'react';

import { Box } from '../../../../src';

function Panel({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section {...props} className={['shadow-sm', className].filter(Boolean).join(' ')} />;
}

export function BoxComponentDemo() {
  return (
    <Box className='d-grid gap-3'>
      <Box
        component='a'
        href='https://getbootstrap.com/docs/6.0/utilities/colors/'
        target='_blank'
        rel='noreferrer'
        bgSubtle='primary'
        fgEmphasis='primary'
        className='d-inline-block px-3 py-2 rounded text-decoration-none'
      >
        A link element
      </Box>
      <Box component='blockquote' theme='accent' themeStyle='subtle' className='p-3 rounded mb-0'>
        A blockquote element with theme utilities.
      </Box>
      <Box component={Panel} bg='1' themeBorder className='p-3 rounded'>
        A custom component receiving the generated class names.
      </Box>
      <Box className='fw-semibold'>Any other utility class can go through className.</Box>
    </Box>
  );
}
