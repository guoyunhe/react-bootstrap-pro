import { Alert } from 'react-bootstrap-pro';

const themes = [
  'primary',
  'accent',
  'success',
  'danger',
  'warning',
  'info',
  'inverse',
  'secondary',
] as const;

export function AlertVariantsDemo() {
  return (
    <div className='d-grid gap-2'>
      {themes.map((theme) => (
        <Alert key={theme} theme={theme}>
          A simple {theme} alert.
        </Alert>
      ))}
    </div>
  );
}
