import { Box } from '../../../../src';

const aspectRatios = ['auto', '1x1', '4x3', '16x9', '21x9'] as const;

const imageSource = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"><rect width="600" height="300" fill="#0d6efd"/><circle cx="300" cy="150" r="90" fill="#fff"/></svg>',
)}`;

export function BoxLayoutDemo() {
  return (
    <Box className='d-grid gap-4'>
      <Box>
        <strong>Aspect ratios</strong>
        <Box className='d-flex flex-wrap align-items-start gap-3 mt-2'>
          {aspectRatios.map((aspectRatio) => (
            <Box
              key={aspectRatio}
              aspectRatio={aspectRatio}
              theme='primary'
              themeStyle='subtle'
              themeBorder
              className='d-flex align-items-center justify-content-center'
              style={{ width: '7rem' }}
            >
              {aspectRatio}
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        <strong>Responsive display</strong>
        <Box className='d-flex flex-wrap gap-2 mt-2'>
          <Box display={{ xs: 'none', md: 'inline-flex' }} bgSubtle='primary' className='p-2'>
            Hidden below md
          </Box>
          <Box display={{ xs: 'block', lg: 'none' }} bgSubtle='success' className='p-2'>
            Hidden at lg and above
          </Box>
        </Box>
      </Box>

      <Box containerQuery='inline' theme='secondary' themeStyle='subtle' className='p-3'>
        <strong>Inline-size query container</strong>
        <Box className='mt-2'>{"containerQuery='inline' adds .contains-inline"}</Box>
      </Box>

      <Box>
        <strong>Float and object fit</strong>
        <Box className='d-flow-root border rounded p-2 mt-2'>
          <Box
            component='img'
            src={imageSource}
            alt='A blue illustration with a white circle'
            objectFit='cover'
            aspectRatio='1x1'
            className='float-end ms-3 rounded'
            style={{ width: '5rem' }}
          />
          Floated image with an explicit aspect ratio and object-fit mode.
        </Box>
      </Box>

      <Box>
        <strong>Overflow and visibility</strong>
        <Box className='d-flex gap-3 mt-2'>
          <Box overflow='hidden' className='border rounded p-2' style={{ width: '8rem' }}>
            overflow hidden
          </Box>
          <Box visibility='invisible' aria-hidden='true'>
            Invisible content
          </Box>
          <Box visibility='visible'>Visible content</Box>
        </Box>
      </Box>

      <Box position='relative' theme='primary' themeStyle='subtle' className='p-4 rounded'>
        <strong>Positioned parent</strong>
        <Box
          position='absolute'
          top={0}
          end={0}
          translateMiddle='y'
          zIndex='tooltip'
          theme='primary'
          themeStyle='contrast'
          className='rounded-pill px-2 py-1'
        >
          Positioned marker
        </Box>
      </Box>

      <Box className='d-flex flex-wrap gap-2'>
        <Box zIndex={-1} className='border rounded p-2'>
          z-n1
        </Box>
        <Box zIndex='menu' className='border rounded p-2'>
          z-menu
        </Box>
        <Box zIndex='toast' className='border rounded p-2'>
          z-toast
        </Box>
      </Box>
    </Box>
  );
}
