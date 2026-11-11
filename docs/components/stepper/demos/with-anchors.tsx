import { Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperWithAnchorsDemo() {
  return (
    <Stepper component='div'>
      <StepperItem component='a' href='#' role='button' active aria-current='false'>
        Create account
      </StepperItem>
      <StepperItem component='a' href='#' role='button' active>
        Confirm email
      </StepperItem>
      <StepperItem component='a' href='#' role='button' theme='secondary'>
        Update profile
      </StepperItem>
      <StepperItem component='a' href='#' role='button' theme='secondary'>
        Finish
      </StepperItem>
    </Stepper>
  );
}
