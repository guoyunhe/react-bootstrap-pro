import { BiArrowRepeat } from 'react-bootstrap-icons-pro';
import { Spinner } from 'react-bootstrap-pro';

export function SpinnerCustomDemo() {
  return (
    <Spinner variant='rotate' label='Loading results' fontSize='2xl'>
      <BiArrowRepeat aria-hidden />
    </Spinner>
  );
}
