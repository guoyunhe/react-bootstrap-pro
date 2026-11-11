import { Box, Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperAlignmentCenterDemo() {
  return (
    <Box textAlign='center'>
      <Stepper horizontal>
        <StepperItem active aria-current='false'>
          Center stepper
        </StepperItem>
        <StepperItem active>Confirm email</StepperItem>
        <StepperItem>Update profile</StepperItem>
        <StepperItem>Finish</StepperItem>
      </Stepper>
    </Box>
  );
}
