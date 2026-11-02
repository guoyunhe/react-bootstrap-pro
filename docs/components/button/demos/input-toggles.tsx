export function ButtonInputToggleDemo() {
  return (
    <div className='d-flex flex-column gap-3'>
      <div className='d-flex flex-wrap gap-2'>
        <label className='btn-check btn-solid theme-primary'>
          <input type='checkbox' defaultChecked />
          {' Checked'}
        </label>
        <label className='btn-check btn-solid theme-primary'>
          <input type='checkbox' />
          {' Toggle'}
        </label>
        <label className='btn-check btn-solid theme-primary'>
          <input type='checkbox' disabled />
          {' Disabled'}
        </label>
      </div>
      <div className='d-flex flex-wrap gap-2'>
        <label className='btn-check btn-outline theme-secondary'>
          <input type='radio' name='button-demo-options' defaultChecked />
          {' First'}
        </label>
        <label className='btn-check btn-outline theme-secondary'>
          <input type='radio' name='button-demo-options' />
          {' Second'}
        </label>
        <label className='btn-check btn-outline theme-secondary'>
          <input type='radio' name='button-demo-options' disabled />
          {' Disabled'}
        </label>
      </div>
    </div>
  );
}
