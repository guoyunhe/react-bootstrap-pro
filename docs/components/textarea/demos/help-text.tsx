import { FormField, FormLabel, FormText, Textarea } from 'react-bootstrap-pro';

export function TextareaHelpTextDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='textarea-comments'>Comments</FormLabel>
      <Textarea
        id='textarea-comments'
        rows={3}
        placeholder='Leave a comment here'
        aria-describedby='textarea-comments-help'
      />
      <FormText id='textarea-comments-help'>Comments are visible to everyone.</FormText>
    </FormField>
  );
}
