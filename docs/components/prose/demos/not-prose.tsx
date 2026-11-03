import { NotProse, Prose } from 'react-bootstrap-pro';

export function ProseNotProseDemo() {
  return (
    <Prose>
      <h2>Documentation with an embedded widget</h2>
      <p>The surrounding content uses prose typography.</p>
      <NotProse className='border rounded p-3'>
        <button className='btn btn-primary' type='button'>
          This widget opts out of prose styles
        </button>
      </NotProse>
      <p>Prose styling resumes after the excluded region.</p>
    </Prose>
  );
}
