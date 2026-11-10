import { Prose } from 'react-bootstrap-pro';

export function ProseBasicDemo() {
  return (
    <Prose>
      <h1>Getting started with documentation</h1>
      <p>
        Writing clear and effective documentation is essential for any project. When you create
        content that others will read and use, <a href='#prose-example'>proper formatting</a> makes
        all the difference. <em>Good documentation</em> helps users understand complex concepts
        quickly and efficiently.
      </p>
      <blockquote>
        <p>
          Documentation is a love letter that you write to your future self. Clear writing today
          saves countless hours of confusion tomorrow.
        </p>
      </blockquote>
      <p>
        The foundation of great documentation starts with{' '}
        <strong>understanding your audience</strong> and their needs. Writers should focus on
        clarity, consistency, and providing practical examples that readers can follow.
      </p>

      <h2>Inline HTML elements</h2>
      <p>
        HTML defines a long list of available inline tags, a complete list of which can be found on
        the{' '}
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element'>
          Mozilla Developer Network
        </a>
        .
      </p>
      <ul>
        <li>
          <strong>To bold text</strong>, use <code>&lt;strong&gt;</code>.
        </li>
        <li>
          <em>To italicize text</em>, use <code>&lt;em&gt;</code>.
        </li>
        <li>
          To highlight, use <mark>mark</mark>.
        </li>
        <li>
          Abbreviations, like <abbr title='HyperText Markup Language'>HTML</abbr>, should use{' '}
          <code>&lt;abbr&gt;</code> with an optional <code>title</code> attribute for the full
          phrase.
        </li>
        <li>
          Citations, like <cite>Mark Otto</cite>, should use <code>&lt;cite&gt;</code>.
        </li>
        <li>
          <del>
            Deleted text should use <code>&lt;del&gt;</code>
          </del>{' '}
          and{' '}
          <ins>
            inserted text should use <code>&lt;ins&gt;</code>
          </ins>
          .
        </li>
        <li>
          Superscript text uses <code>&lt;sup&gt;</code>, like E = mc<sup>2</sup>, and subscript
          text uses <code>&lt;sub&gt;</code>, like H<sub>2</sub>O.
        </li>
      </ul>
      <p>Most of these elements are styled by browsers with few modifications on our part.</p>

      <h2>Heading</h2>
      <p>
        Effective documentation requires careful attention to structure and flow. When organizing
        content, consider how readers will navigate through your material and what information they
        need first. Clear headings help users scan quickly and find relevant sections.
      </p>

      <h3>Code</h3>
      <p>
        Inline code is available with the <code>&lt;code&gt;</code> element. Longer snippets use a{' '}
        <code>&lt;pre&gt;</code> element, which scrolls horizontally when a line does not fit.
      </p>
      <pre>
        <code>{`// Create a function that takes two arguments and returns their sum
const adder = new Function('a', 'b', 'return a + b');

// Call the function
adder(2, 6);
// > 8`}</code>
      </pre>
      <p>
        Code examples should be practical and directly related to the concepts being explained.
        Always test your code snippets to ensure they work as expected before including them in
        documentation.
      </p>

      <h3>Lists</h3>
      <p>
        When presenting information in lists, consider whether the order matters. Use numbered lists
        for sequential steps and bullet points for related items that do not require a specific
        order.
      </p>
      <ul>
        <li>Write clear, concise list items that focus on one concept each.</li>
        <li>Use parallel structure across all items in your list.</li>
        <li>Keep list items roughly the same length when possible.</li>
      </ul>
      <p>Consistency in formatting helps readers process information more efficiently.</p>
      <ol>
        <li>Start with the most important information first.</li>
        <li>Provide context before diving into technical details.</li>
        <li>Include practical examples that readers can apply immediately.</li>
      </ol>
      <p>
        Well-structured content makes complex topics more accessible to readers with varying levels
        of expertise.
      </p>
      <ul>
        <li>
          Document your processes and decisions for future reference.
          <ul>
            <li>Include reasoning behind important choices you made.</li>
            <li>Note any alternative approaches you considered.</li>
            <li>Record lessons learned during implementation.</li>
          </ul>
        </li>
        <li>Update documentation regularly as your project evolves.</li>
        <li>Test documentation with actual users to identify gaps.</li>
      </ul>
      <p>Regular maintenance ensures your documentation remains accurate and helpful over time.</p>
      <dl>
        <dt>HyperText Markup Language (HTML)</dt>
        <dd>The language used to describe and define the content of a Web page.</dd>
        <dt>Cascading Style Sheets (CSS)</dt>
        <dd>Used to describe the appearance of Web content.</dd>
        <dt>JavaScript (JS)</dt>
        <dd>The programming language used to build advanced Web sites and applications.</dd>
      </dl>
      <p>
        Technical definitions should be clear and accessible to your target audience. Avoid jargon
        when simpler terms will convey the same meaning effectively.
      </p>

      <h3>Images</h3>
      <p>
        Visual elements enhance understanding by providing concrete examples of abstract concepts.
        Choose images that directly support your written content rather than serving as mere
        decoration.
      </p>
      <p>
        <img src='https://placehold.co/800x400' alt='Placeholder image, 800 by 400 pixels' />{' '}
        <img src='https://placehold.co/400x200' alt='Placeholder image, 400 by 200 pixels' />{' '}
        <img src='https://placehold.co/200x200' alt='Placeholder image, 200 by 200 pixels' />
      </p>

      <h3>Tables</h3>
      <p>
        Tables work best for comparing related data points or presenting structured information that
        benefits from a grid layout.
      </p>
      <table>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Up-votes</th>
            <th scope='col'>Down-votes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>4</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td>7</td>
            <td>9</td>
          </tr>
          <tr>
            <td>Totals</td>
            <td>21</td>
            <td>23</td>
          </tr>
        </tbody>
      </table>
      <p>
        Keep table headers descriptive and consider the reading order when arranging columns. Simple
        tables are easier to understand and maintain than complex ones.
      </p>
    </Prose>
  );
}
