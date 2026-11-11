import { Box, Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperResponsiveDemo() {
  return (
    <Box containerQuery='inline'>
      <Stepper horizontal='sm'>
        <StepperItem active aria-current='false'>
          Create account
        </StepperItem>
        <StepperItem active>Confirm email</StepperItem>
        <StepperItem>Update profile</StepperItem>
        <StepperItem>Finish</StepperItem>
      </Stepper>
    </Box>
  );
}
