import { Tooltip } from 'react-bootstrap-pro';

export function TooltipSvgTriggerDemo() {
  return (
    <Tooltip
      trigger={
        <a
          href='https://example.com'
          className='d-inline-block'
          aria-label='Hover or focus to see the tooltip'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 100 100'
            aria-hidden='true'
          >
            <rect width='100%' height='100%' fill='#563d7c' />
            <circle cx='50' cy='50' r='30' fill='#007bff' />
          </svg>
        </a>
      }
    >
      Default tooltip
    </Tooltip>
  );
}
