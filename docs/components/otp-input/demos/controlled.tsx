import { useState } from 'react';
import { Box, FormText, OtpInput } from 'react-bootstrap-pro';

export function OtpInputControlledDemo() {
  const [code, setCode] = useState('123');
  const [complete, setComplete] = useState(false);

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <OtpInput
        aria-label='Verification code'
        value={code}
        onChange={(next) => {
          setCode(next);
          setComplete(false);
        }}
        onComplete={() => setComplete(true)}
      />
      <FormText>
        {complete ? `Code ${code} is complete.` : `${code.length} of 6 digits entered.`}
      </FormText>
    </Box>
  );
}
