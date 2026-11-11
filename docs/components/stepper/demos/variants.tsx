import { Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperVariantsDemo() {
  return (
    <Stepper horizontal>
      <StepperItem active aria-current='false' theme='accent'>
        Create account
      </StepperItem>
      <StepperItem>Confirm email</StepperItem>
      <StepperItem active theme='success'>
        Update profile
      </StepperItem>
      <StepperItem active theme='danger'>
        Finish
      </StepperItem>
    </Stepper>
  );
}
