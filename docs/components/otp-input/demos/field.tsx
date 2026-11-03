import { FormField, FormLabel, FormText, OtpInput } from 'react-bootstrap-pro';

export function OtpInputFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='otp-code'>Verification code</FormLabel>
      <OtpInput id='otp-code' aria-describedby='otp-code-help' />
      <FormText id='otp-code-help'>Enter the 6-digit code sent to your phone.</FormText>
    </FormField>
  );
}
