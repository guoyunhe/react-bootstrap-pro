import { Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperFullWidthDemo() {
  return (
    <Stepper horizontal w={100}>
      <StepperItem active aria-current='false'>
        Create account
      </StepperItem>
      <StepperItem active>Confirm email</StepperItem>
      <StepperItem>Update profile</StepperItem>
      <StepperItem>Finish</StepperItem>
    </Stepper>
  );
}
