import { useState } from 'react';
import { Box, Button, Combobox, FormField, FormLabel } from 'react-bootstrap-pro';

export function ComboboxFormSubmissionDemo() {
  const [submittedValue, setSubmittedValue] = useState('');

  return (
    <Box
      component='form'
      d='flex'
      flexDirection='column'
      gap={3}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setSubmittedValue(String(formData.get('country') ?? ''));
      }}
    >
      <FormField>
        <FormLabel htmlFor='combobox-submit-country'>Country</FormLabel>
        <Combobox
          id='combobox-submit-country'
          name='country'
          defaultValue='ca'
          placeholder='Pick a country…'
          options={[
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'ca', label: 'Canada' },
          ]}
        />
      </FormField>
      <Button type='submit' variant='solid' theme='primary'>
        Submit form
      </Button>
      <Box component='output' aria-live='polite'>
        {submittedValue ? `Submitted country: ${submittedValue}` : ''}
      </Box>
    </Box>
  );
}
