import { useState } from 'react';
import { Box, Button, Collapse } from 'react-bootstrap-pro';

export function CollapseMultipleTogglesDemo() {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);

  function toggleBoth() {
    setFirstOpen((previous) => !previous);
    setSecondOpen((previous) => !previous);
  }

  return (
    <>
      <Box component='p' d='inline-flex' gap={1}>
        <Button
          variant='solid'
          theme='primary'
          aria-expanded={firstOpen}
          aria-controls='multiCollapseExample1'
          onClick={() => setFirstOpen((previous) => !previous)}
        >
          Toggle first element
        </Button>
        <Button
          variant='solid'
          theme='primary'
          aria-expanded={secondOpen}
          aria-controls='multiCollapseExample2'
          onClick={() => setSecondOpen((previous) => !previous)}
        >
          Toggle second element
        </Button>
        <Button
          variant='solid'
          theme='primary'
          aria-expanded={firstOpen && secondOpen}
          aria-controls='multiCollapseExample1 multiCollapseExample2'
          onClick={toggleBoth}
        >
          Toggle both elements
        </Button>
      </Box>
      <Box d='grid' gridColumns={{ xs: 1, md: 2 }} gap={3}>
        <Collapse id='multiCollapseExample1' show={firstOpen}>
          <Box className='card card-body'>
            This first panel can be toggled on its own or together with the second panel.
          </Box>
        </Collapse>
        <Collapse id='multiCollapseExample2' show={secondOpen}>
          <Box className='card card-body'>
            This second panel can be toggled on its own or together with the first panel.
          </Box>
        </Collapse>
      </Box>
    </>
  );
}
