import { BiBraces, BiFileEarmarkCode, BiPalette } from 'react-bootstrap-icons-pro';
import { Combobox } from 'react-bootstrap-pro';

export function ComboboxAllTogetherDemo() {
  return (
    <Combobox
      check
      defaultValue='js'
      placeholder='Choose a language…'
      aria-label='Language'
      options={[
        {
          value: 'html',
          label: 'HTML',
          icon: <BiFileEarmarkCode />,
          description: 'Markup',
        },
        { value: 'css', label: 'CSS', icon: <BiPalette />, description: 'Styles' },
        { value: 'js', label: 'JavaScript', icon: <BiBraces />, description: 'Behavior' },
      ]}
    />
  );
}
