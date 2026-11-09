import { Popover, PopoverBody } from 'react-bootstrap-pro';

export function PopoverResponsivePlacementDemo() {
  return (
    <div className='py-5'>
      <Popover
        placement={{ xs: 'bottom', md: 'end' }}
        trigger={
          <button type='button' className='btn-solid theme-secondary'>
            Responsive placement
          </button>
        }
      >
        <PopoverBody>Bottom below 768px; end at 768px and above.</PopoverBody>
      </Popover>
    </div>
  );
}
