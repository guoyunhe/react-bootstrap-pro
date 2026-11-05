import { Box, ChipInput, FormField, FormLabel, FormText } from 'react-bootstrap-pro';

export function ChipInputDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={4}>
      <FormField>
        <FormLabel htmlFor='chips-skills'>Skills</FormLabel>
        <ChipInput
          id='chips-skills'
          theme='primary'
          defaultValue={['JavaScript', 'TypeScript']}
          placeholder='Add more…'
        />
        <FormText>Press Enter or comma to add a skill.</FormText>
      </FormField>
      <FormField>
        <FormLabel htmlFor='chips-empty'>Tags</FormLabel>
        <ChipInput id='chips-empty' placeholder='Type and press Enter' />
      </FormField>
    </Box>
  );
}
