import { Button } from '../../../../src';
import { themeOptions } from './shared';

export function ButtonStyledDemo() {
  return (
    <div className='d-flex flex-wrap gap-2'>
      {themeOptions.map((theme) => (
        <Button key={theme} variant='solid' theme={theme} className='btn-styled'>
          {theme}
        </Button>
      ))}
    </div>
  );
}
