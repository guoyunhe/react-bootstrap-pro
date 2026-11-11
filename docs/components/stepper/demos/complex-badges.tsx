import { Badge, Box, Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperComplexBadgesDemo() {
  return (
    <Stepper horizontal w={100}>
      <StepperItem theme='success' active aria-current='false'>
        <Box>
          <Box>Create account</Box>
          <Badge variant='subtle'>Complete</Badge>
        </Box>
      </StepperItem>
      <StepperItem theme='success' active>
        <Box>
          <Box>Confirm email</Box>
          <Badge variant='subtle'>Complete</Badge>
        </Box>
      </StepperItem>
      <StepperItem theme='primary' active>
        <Box>
          <Box>Update profile</Box>
          <Badge variant='subtle'>In-progress</Badge>
        </Box>
      </StepperItem>
      <StepperItem theme='secondary'>
        <Box>
          <Box>Finish</Box>
          <Badge variant='subtle'>Pending</Badge>
        </Box>
      </StepperItem>
    </Stepper>
  );
}
