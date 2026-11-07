import { Select } from 'react-bootstrap-pro';

export function SelectStatesDemo() {
  return (
    <div>
      <Select size='sm' aria-label='Small select' defaultValue='one'>
        <option value='one'>Small select</option>
        <option value='two'>Another option</option>
      </Select>
      <Select size='lg' aria-label='Large select' defaultValue='one' className='mt-3'>
        <option value='one'>Large select</option>
        <option value='two'>Another option</option>
      </Select>
      <Select disabled aria-label='Disabled select' defaultValue='one' className='mt-3'>
        <option value='one'>Disabled select</option>
      </Select>
    </div>
  );
}
