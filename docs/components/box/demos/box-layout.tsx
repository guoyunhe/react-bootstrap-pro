import { Box } from 'react-bootstrap-pro';

const aspectRatios = ['auto', '1x1', '4x3', '16x9', '21x9'] as const;

const imageSource = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"><rect width="600" height="300" fill="#0d6efd"/><circle cx="300" cy="150" r="90" fill="#fff"/></svg>',
)}`;

export function BoxLayoutDemo() {
  return (
    <Box display='grid' gap={4}>
      <Box>
        <strong>Aspect ratios</strong>
        <Box display='flex' flexWrap='wrap' alignItems='start' gap={3} mt={2}>
          {aspectRatios.map((aspectRatio) => (
            <Box
              key={aspectRatio}
              ratio={aspectRatio}
              theme='primary'
              themeStyle='subtle'
              themeBorder
              display='flex'
              alignItems='center'
              justifyContent='center'
              style={{ width: '7rem' }}
            >
              {aspectRatio}
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        <strong>Responsive display</strong>
        <Box display='flex' flexWrap='wrap' gap={2} mt={2}>
          <Box display={{ xs: 'none', md: 'inline-flex' }} bgSubtle='primary' p={2}>
            Hidden below md
          </Box>
          <Box display={{ xs: 'block', lg: 'none' }} bgSubtle='success' p={2}>
            Hidden at lg and above
          </Box>
        </Box>
      </Box>

      <Box containerQuery='inline' theme='secondary' themeStyle='subtle' p={3}>
        <strong>Inline-size query container</strong>
        <Box mt={2}>{"containerQuery='inline' adds .contains-inline"}</Box>
      </Box>

      <Box>
        <strong>Float and object fit</strong>
        <Box display='flow-root' className='border rounded' p={2} mt={2}>
          <Box
            component='img'
            src={imageSource}
            alt='A blue illustration with a white circle'
            objectFit='cover'
            ratio='1x1'
            float='end'
            ms={3}
            className='rounded'
            style={{ width: '5rem' }}
          />
          Floated image with an explicit aspect ratio and object-fit mode.
        </Box>
      </Box>

      <Box>
        <strong>Overflow and visibility</strong>
        <Box display='flex' gap={3} mt={2}>
          <Box overflow='hidden' className='border rounded' p={2} style={{ width: '8rem' }}>
            overflow hidden
          </Box>
          <Box visibility='invisible' aria-hidden='true'>
            Invisible content
          </Box>
          <Box visibility='visible'>Visible content</Box>
        </Box>
      </Box>

      <Box position='relative' theme='primary' themeStyle='subtle' className='rounded' p={4}>
        <strong>Positioned parent</strong>
        <Box
          position='absolute'
          top={0}
          end={0}
          translateMiddle='y'
          z='tooltip'
          theme='primary'
          themeStyle='contrast'
          rounded='pill'
          px={2}
          py={1}
        >
          Positioned marker
        </Box>
      </Box>

      <Box display='flex' flexWrap='wrap' gap={2}>
        <Box z={-1} className='border rounded' p={2}>
          z-index: -1
        </Box>
        <Box z={3} className='border rounded' p={2}>
          z-index: 3
        </Box>
        <Box z='menu' className='border rounded' p={2}>
          z-menu
        </Box>
        <Box z='toast' className='border rounded' p={2}>
          z-toast
        </Box>
      </Box>
    </Box>
  );
}
