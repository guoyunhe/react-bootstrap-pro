import { Checkbox, FormField, FormFieldContent, FormLabel, FormText } from 'react-bootstrap-pro';

export function CheckboxDescriptionDemo() {
  return (
    <FormField>
      <Checkbox id='checkbox-description' />
      <FormFieldContent>
        <FormLabel htmlFor='checkbox-description' fontWeight='medium'>
          Example new checkbox
        </FormLabel>
        <FormText component='small'>Supporting description for the above label.</FormText>
      </FormFieldContent>
    </FormField>
  );
}
