import { Scrollspy } from 'react-bootstrap-pro';

export function ScrollspyBasicDemo() {
  return (
    <>
      <nav id='section-nav' aria-label='Section navigation'>
        <a href='#section-one'>Section one</a> <a href='#section-two'>Section two</a>
      </nav>
      <Scrollspy target='#section-nav' tabIndex={0} style={{ height: 160, overflowY: 'auto' }}>
        <h4 id='section-one'>Section one</h4>
        <p>Scrollable content with enough space to demonstrate section tracking.</p>
        <h4 id='section-two'>Section two</h4>
        <p>More content in the second section.</p>
      </Scrollspy>
    </>
  );
}
