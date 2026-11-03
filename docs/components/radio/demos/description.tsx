import { FormField, FormFieldContent, FormLabel, FormText, Radio } from 'react-bootstrap-pro';

export function RadioDescriptionDemo() {
  return (
    <FormField>
      <Radio id='radio-description' name='radio-description' />
      <FormFieldContent>
        <FormLabel htmlFor='radio-description' fontWeight='medium'>
          Example new radio
        </FormLabel>
        <FormText component='small'>Supporting description for the above label.</FormText>
      </FormFieldContent>
    </FormField>
  );
}
