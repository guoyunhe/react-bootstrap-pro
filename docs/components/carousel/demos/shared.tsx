import './shared.css';
import { Box } from 'react-bootstrap-pro';

export function CarouselSlidePlaceholder({ label }: { label: string }) {
  return (
    <Box
      role='img'
      aria-label={`Placeholder: ${label}`}
      className='carousel-slide-placeholder'
      d='flex'
      alignItems='center'
      justifyContent='center'
    >
      {label}
    </Box>
  );
}
