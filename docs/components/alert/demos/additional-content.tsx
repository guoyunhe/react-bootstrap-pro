import { Alert, AlertHeading, Box } from 'react-bootstrap-pro';

export function AlertAdditionalContentDemo() {
  return (
    <Alert theme='success'>
      <Box d='flex' flexDirection='column' alignItems='stretch' alignSelf='stretch' flex='fill'>
        <AlertHeading mb={2}>Well done!</AlertHeading>
        <Box component='p'>
          Aww yeah, you successfully read this important alert message. This example text is going
          to run a bit longer so that you can see how spacing within an alert works with this kind
          of content.
        </Box>
        <Box component='hr' my={3} />
        <Box component='p' mb={0}>
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </Box>
      </Box>
    </Alert>
  );
}
