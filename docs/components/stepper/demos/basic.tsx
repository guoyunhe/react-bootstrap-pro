import { Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperBasicDemo() {
  return (
    <Stepper>
      <StepperItem active>Create account</StepperItem>
      <StepperItem active aria-current='step'>
        Confirm email
      </StepperItem>
      <StepperItem>Finish</StepperItem>
    </Stepper>
  );
}
