export function CarouselSlidePlaceholder({ label }: { label: string }) {
  return (
    <div
      role='img'
      aria-label={`Placeholder: ${label}`}
      className='d-flex align-items-center justify-content-center rounded-5'
      style={{
        aspectRatio: '2 / 1',
        backgroundColor: '#888',
        color: '#555',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
      }}
    >
      {label}
    </div>
  );
}
