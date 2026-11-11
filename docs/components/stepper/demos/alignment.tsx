import { Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperAlignmentDemo() {
  return (
    <Stepper horizontal>
      <StepperItem active aria-current='false'>
        Default stepper
      </StepperItem>
      <StepperItem active>Confirm email</StepperItem>
      <StepperItem>Update profile</StepperItem>
      <StepperItem>Finish</StepperItem>
    </Stepper>
  );
}
