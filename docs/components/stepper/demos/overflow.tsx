import { Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperOverflowDemo() {
  return (
    <Stepper horizontal overflow>
      <StepperItem active aria-current='false'>
        Create account
      </StepperItem>
      <StepperItem active>Verify email address</StepperItem>
      <StepperItem>Complete profile setup</StepperItem>
      <StepperItem>Add payment method</StepperItem>
      <StepperItem>Review and confirm</StepperItem>
      <StepperItem>Finish onboarding</StepperItem>
    </Stepper>
  );
}
