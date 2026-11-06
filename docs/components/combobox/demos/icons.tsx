import { BiBraces, BiFileEarmarkCode, BiPalette } from 'react-bootstrap-icons-pro';
import { Combobox } from 'react-bootstrap-pro';

export function ComboboxIconsDemo() {
  return (
    <Combobox
      aria-label='Language'
      placeholder='Choose a language…'
      options={[
        { value: 'html', label: 'HTML', icon: <BiFileEarmarkCode /> },
        { value: 'css', label: 'CSS', icon: <BiPalette /> },
        { value: 'js', label: 'JavaScript', icon: <BiBraces /> },
      ]}
    />
  );
}
