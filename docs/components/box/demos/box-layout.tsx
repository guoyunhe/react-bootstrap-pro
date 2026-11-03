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
        <Box display='flex' flexWrap='wrap' alignItems='start' gap={3} marginTop={2}>
          {aspectRatios.map((aspectRatio) => (
            <Box
              key={aspectRatio}
              aspectRatio={aspectRatio}
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
        <Box display='flex' flexWrap='wrap' gap={2} marginTop={2}>
          <Box display={{ xs: 'none', md: 'inline-flex' }} bgSubtle='primary' padding={2}>
            Hidden below md
          </Box>
          <Box display={{ xs: 'block', lg: 'none' }} bgSubtle='success' padding={2}>
            Hidden at lg and above
          </Box>
        </Box>
      </Box>

      <Box containerQuery='inline' theme='secondary' themeStyle='subtle' padding={3}>
        <strong>Inline-size query container</strong>
        <Box marginTop={2}>{"containerQuery='inline' adds .contains-inline"}</Box>
      </Box>

      <Box>
        <strong>Float and object fit</strong>
        <Box display='flow-root' className='border rounded' padding={2} marginTop={2}>
          <Box
            component='img'
            src={imageSource}
            alt='A blue illustration with a white circle'
            objectFit='cover'
            aspectRatio='1x1'
            float='end'
            marginStart={3}
            className='rounded'
            style={{ width: '5rem' }}
          />
          Floated image with an explicit aspect ratio and object-fit mode.
        </Box>
      </Box>

      <Box>
        <strong>Overflow and visibility</strong>
        <Box display='flex' gap={3} marginTop={2}>
          <Box overflow='hidden' className='border rounded' padding={2} style={{ width: '8rem' }}>
            overflow hidden
          </Box>
          <Box visibility='invisible' aria-hidden='true'>
            Invisible content
          </Box>
          <Box visibility='visible'>Visible content</Box>
        </Box>
      </Box>

      <Box position='relative' theme='primary' themeStyle='subtle' className='rounded' padding={4}>
        <strong>Positioned parent</strong>
        <Box
          position='absolute'
          top={0}
          end={0}
          translateMiddle='y'
          zIndex='tooltip'
          theme='primary'
          themeStyle='contrast'
          rounded='pill'
          paddingX={2}
          paddingY={1}
        >
          Positioned marker
        </Box>
      </Box>

      <Box display='flex' flexWrap='wrap' gap={2}>
        <Box zIndex={-1} className='border rounded' padding={2}>
          z-n1
        </Box>
        <Box zIndex='menu' className='border rounded' padding={2}>
          z-menu
        </Box>
        <Box zIndex='toast' className='border rounded' padding={2}>
          z-toast
        </Box>
      </Box>
    </Box>
  );
}
