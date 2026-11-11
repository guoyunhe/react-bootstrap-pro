import { Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperBasicDemo() {
  return (
    <Stepper>
      <StepperItem active aria-current='false'>
        Create account
      </StepperItem>
      <StepperItem active>Confirm email</StepperItem>
      <StepperItem>Update profile</StepperItem>
      <StepperItem>Finish</StepperItem>
    </Stepper>
  );
}
