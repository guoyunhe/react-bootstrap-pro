import { Textarea } from 'react-bootstrap-pro';

export function TextareaStatesDemo() {
  return (
    <div>
      <Textarea size='sm' rows={2} aria-label='Small textarea' placeholder='Small textarea' />
      <Textarea
        size='lg'
        rows={4}
        aria-label='Large textarea'
        placeholder='Large textarea'
        className='mt-3'
      />
      <Textarea
        plaintext
        readOnly
        rows={2}
        aria-label='Readonly textarea'
        defaultValue='Readonly plaintext'
        className='mt-3'
      />
    </div>
  );
}
