import { Button } from '../../../../src';
import { themeOptions, variantOptions } from './shared';

export function ButtonVariantsDemo() {
  return (
    <div className='d-flex flex-column gap-2'>
      {themeOptions.map((theme) => (
        <div key={theme} className='d-flex flex-wrap align-items-center gap-2'>
          <span className='text-capitalize fw-semibold'>{theme}</span>
          {variantOptions.slice(0, 4).map((variant) => (
            <Button key={variant} variant={variant} theme={theme}>
              {`${theme} ${variant}`}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}
