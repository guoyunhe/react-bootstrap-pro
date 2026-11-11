import { Box, Stepper, StepperItem } from 'react-bootstrap-pro';

export function StepperComplexDemo() {
  return (
    <Stepper>
      <StepperItem alignItems='start' active aria-current='false'>
        <Box pt={1}>
          <Box fontWeight='semibold'>Create</Box>
          <Box component='small' fg='3'>
            Create an account.
          </Box>
        </Box>
      </StepperItem>
      <StepperItem alignItems='start' active>
        <Box pt={1}>
          <Box fontWeight='semibold'>Confirm</Box>
          <Box component='small' fg='3'>
            Confirm your email.
          </Box>
        </Box>
      </StepperItem>
      <StepperItem alignItems='start'>
        <Box pt={1}>
          <Box fontWeight='semibold'>Set-up</Box>
          <Box component='small' fg='3'>
            Configure your profile.
          </Box>
        </Box>
      </StepperItem>
      <StepperItem alignItems='start'>
        <Box pt={1}>
          <Box fontWeight='semibold'>Finish</Box>
          <Box component='small' fg='3'>
            Welcome aboard!
          </Box>
        </Box>
      </StepperItem>
    </Stepper>
  );
}
