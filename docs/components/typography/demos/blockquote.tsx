import { Blockquote, BlockquoteFooter } from 'react-bootstrap-pro';

export function TypographyBlockquoteDemo() {
  return (
    <Blockquote component='figure'>
      <blockquote>
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>
      <BlockquoteFooter component='figcaption'>
        Someone famous in <cite title='Source Title'>Source Title</cite>
      </BlockquoteFooter>
    </Blockquote>
  );
}
