import { Toggler } from 'react-bootstrap-pro';

export function TogglerBasicDemo() {
  return (
    <>
      <Toggler target='#theme-surface' attribute='class' value='bg-primary'>
        Toggle theme
      </Toggler>
      <div id='theme-surface' className='border p-3'>
        Target
      </div>
    </>
  );
}
