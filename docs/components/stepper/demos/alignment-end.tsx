import { Box, Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperAlignmentEndDemo() {
  return (
    <Box textAlign='end'>
      <Stepper horizontal>
        <StepperItem active aria-current='false'>
          End stepper
        </StepperItem>
        <StepperItem active>Confirm email</StepperItem>
        <StepperItem>Update profile</StepperItem>
        <StepperItem>Finish</StepperItem>
      </Stepper>
    </Box>
  );
}
