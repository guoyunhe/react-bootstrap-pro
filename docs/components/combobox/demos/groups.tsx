import { Combobox } from 'react-bootstrap-pro';

export function ComboboxGroupsDemo() {
  return (
    <Combobox
      placeholder='Select a language…'
      aria-label='Language'
      groups={[
        {
          label: 'Frontend',
          options: [
            { value: 'html', label: 'HTML' },
            { value: 'css', label: 'CSS' },
            { value: 'js', label: 'JavaScript' },
          ],
        },
        {
          label: 'Backend',
          options: [
            { value: 'python', label: 'Python' },
            { value: 'ruby', label: 'Ruby' },
            { value: 'go', label: 'Go' },
          ],
        },
      ]}
    />
  );
}
