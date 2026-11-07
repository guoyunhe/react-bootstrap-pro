import { BiSearch } from 'react-bootstrap-icons-pro';
import {
  Box,
  Checkbox,
  ChipInput,
  FormFeedback,
  FormField,
  FormFieldContent,
  FormFloating,
  FormLabel,
  Input,
  InputGroup,
  InputGroupText,
  Radio,
  Range,
  Select,
  Switch,
  SwitchInput,
  Textarea,
} from 'react-bootstrap-pro';

export function ValidationSupportedDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={4}>
      <FormField>
        <FormLabel htmlFor='validation-supported-textarea'>Textarea</FormLabel>
        <Textarea
          id='validation-supported-textarea'
          placeholder='Required example textarea'
          validation='invalid'
          aria-describedby='validation-supported-textarea-feedback'
        />
        <FormFeedback id='validation-supported-textarea-feedback'>
          Please enter a message in the textarea.
        </FormFeedback>
      </FormField>
      <Box>
        <FormLabel>Checkbox</FormLabel>
        <FormField>
          <Checkbox
            id='validation-supported-check'
            validation='invalid'
            aria-describedby='validation-supported-check-feedback'
          />
          <FormFieldContent>
            <label htmlFor='validation-supported-check'>Check this checkbox</label>
            <FormFeedback id='validation-supported-check-feedback'>
              Example invalid feedback text
            </FormFeedback>
          </FormFieldContent>
        </FormField>
      </Box>
      <Box>
        <FormLabel>Radio</FormLabel>
        <FormField>
          <Radio
            id='validation-supported-radio-1'
            name='validation-supported-radio'
            validation='invalid'
            aria-describedby='validation-supported-radio-feedback'
          />
          <label htmlFor='validation-supported-radio-1'>Toggle this radio</label>
        </FormField>
        <FormField>
          <Radio
            id='validation-supported-radio-2'
            name='validation-supported-radio'
            validation='invalid'
            aria-describedby='validation-supported-radio-feedback'
          />
          <FormFieldContent>
            <label htmlFor='validation-supported-radio-2'>Or toggle this other radio</label>
            <FormFeedback id='validation-supported-radio-feedback'>
              More example invalid feedback text
            </FormFeedback>
          </FormFieldContent>
        </FormField>
      </Box>
      <Box>
        <FormLabel>Switch</FormLabel>
        <FormField>
          <Switch>
            <SwitchInput
              id='validation-supported-switch'
              validation='invalid'
              aria-describedby='validation-supported-switch-feedback'
            />
          </Switch>
          <FormFieldContent>
            <label htmlFor='validation-supported-switch'>Toggle this switch</label>
            <FormFeedback id='validation-supported-switch-feedback'>
              Example invalid switch feedback
            </FormFeedback>
          </FormFieldContent>
        </FormField>
      </Box>
      <FormField>
        <FormLabel htmlFor='validation-supported-select'>Select</FormLabel>
        <Select
          id='validation-supported-select'
          validation='invalid'
          aria-describedby='validation-supported-select-feedback'
        >
          <option value=''>Open this select menu</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Select>
        <FormFeedback id='validation-supported-select-feedback'>
          Example invalid select feedback
        </FormFeedback>
      </FormField>
      <FormField>
        <FormLabel htmlFor='validation-supported-file'>File input</FormLabel>
        <Input
          type='file'
          id='validation-supported-file'
          validation='invalid'
          aria-describedby='validation-supported-file-feedback'
        />
        <FormFeedback id='validation-supported-file-feedback'>
          Example invalid form file feedback
        </FormFeedback>
      </FormField>
      <FormField>
        <FormLabel htmlFor='validation-supported-range'>Range</FormLabel>
        <Range
          id='validation-supported-range'
          min={0}
          max={5}
          validation='invalid'
          aria-describedby='validation-supported-range-feedback'
        />
        <FormFeedback id='validation-supported-range-feedback'>
          Example invalid range feedback
        </FormFeedback>
      </FormField>
      <FormField>
        <FormFloating>
          <FormLabel htmlFor='validation-supported-floating'>Email address</FormLabel>
          <Input
            type='email'
            id='validation-supported-floating'
            placeholder='name@example.com'
            defaultValue='test@example.com'
            validation='invalid'
            aria-describedby='validation-supported-floating-feedback'
          />
        </FormFloating>
        <FormFeedback id='validation-supported-floating-feedback' d='block'>
          Example invalid floating label feedback
        </FormFeedback>
      </FormField>
      <FormField>
        <FormLabel htmlFor='validation-supported-adorn'>Adorned input</FormLabel>
        <Box component='label' classNameBefore='form-control form-adorn is-invalid'>
          <Box className='form-adorn-icon' aria-hidden='true'>
            <BiSearch />
          </Box>
          <Input
            ghost
            id='validation-supported-adorn'
            placeholder='Search...'
            aria-describedby='validation-supported-adorn-feedback'
          />
        </Box>
        <FormFeedback id='validation-supported-adorn-feedback'>
          Example invalid adorned input feedback
        </FormFeedback>
      </FormField>
      <FormField>
        <FormLabel htmlFor='validation-supported-group'>Input group</FormLabel>
        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <Input
            id='validation-supported-group'
            placeholder='Username'
            validation='invalid'
            aria-describedby='validation-supported-group-feedback'
          />
        </InputGroup>
        <FormFeedback id='validation-supported-group-feedback'>
          Please choose a username
        </FormFeedback>
      </FormField>
      <FormField>
        <FormLabel htmlFor='validation-supported-chips'>Tags</FormLabel>
        <ChipInput
          id='validation-supported-chips'
          defaultValue={['Example']}
          validation='invalid'
          aria-describedby='validation-supported-chips-feedback'
        />
        <FormFeedback id='validation-supported-chips-feedback'>
          Please add at least one tag
        </FormFeedback>
      </FormField>
    </Box>
  );
}
