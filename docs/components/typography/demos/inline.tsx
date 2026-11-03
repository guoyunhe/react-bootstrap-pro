import { Abbr, Box } from 'react-bootstrap-pro';

export function TypographyInlineDemo() {
  return (
    <>
      <p>
        Use <mark>mark</mark> for highlighted text, <del>del</del> for removed text, and{' '}
        <ins>ins</ins> for additions.
      </p>
      <p>
        <small>Fine print uses the semantic small element.</small>
      </p>
      <p>
        <Abbr initialism title='HyperText Markup Language'>
          HTML
        </Abbr>{' '}
        is an initialism with an expanded description.
      </p>
      <p>
        <Box component='span' textDecoration='underline'>
          Utility styling
        </Box>{' '}
        uses Box props instead of presentational HTML.
      </p>
    </>
  );
}
