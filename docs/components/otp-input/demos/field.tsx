import { FormField, FormLabel, FormText, OTPInput } from 'react-bootstrap-pro';

export function OTPInputFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='otp-code'>Verification code</FormLabel>
      <OTPInput id='otp-code' aria-describedby='otp-code-help' />
      <FormText id='otp-code-help'>Enter the 6-digit code sent to your phone.</FormText>
    </FormField>
  );
}
