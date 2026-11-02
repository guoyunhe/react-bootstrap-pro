import { Button } from '../../../../src';
import { themeOptions } from './shared';

export function ButtonLinkDemo() {
  return (
    <div className='d-flex flex-wrap gap-2'>
      <Button variant='link'>Default link</Button>
      {themeOptions.map((theme) => (
        <Button key={theme} variant='link' theme={theme}>
          {theme}
        </Button>
      ))}
    </div>
  );
}
