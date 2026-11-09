import { Placeholder } from 'react-bootstrap-pro';

export function PlaceholderBasicDemo() {
  return (
    <div className='d-grid gap-3' style={{ maxWidth: 288 }}>
      <article className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and fill the card content area.
          </p>
          <a className='btn btn-primary' href='#placeholder-example'>
            Go somewhere
          </a>
        </div>
      </article>
      <article className='card' aria-hidden='true'>
        <div className='card-body'>
          <h5 className='card-title placeholder-wave'>
            <Placeholder w={50} />
          </h5>
          <p className='card-text placeholder-wave'>
            <Placeholder w={75} /> <Placeholder w={50} /> <Placeholder w={50} />{' '}
            <Placeholder w={75} /> <Placeholder w={100} />
          </p>
          <a
            className='btn btn-primary disabled placeholder'
            aria-disabled='true'
            href='#placeholder-example'
            tabIndex={-1}
            style={{ width: '50%' }}
          />
        </div>
      </article>
    </div>
  );
}
