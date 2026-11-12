import { BiBell, BiCheckCircle, BiPlus, BiSearch } from 'react-bootstrap-icons-pro';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Alert,
  Avatar,
  AvatarStatus,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  CloseButton,
  DatePicker,
  FormAdornIcon,
  FormControl,
  FormField,
  FormLabel,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  OTPInput,
  PageLink,
  Pagination,
  PaginationItem,
  PasswordStrength,
  Placeholder,
  Progress,
  Range,
  Select,
  Spinner,
  Stepper,
  StepperItem,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Toast,
  ToastBody,
  ToastHeader,
} from 'react-bootstrap-pro';

import './showcase.css';

const logo = new URL('../favicon.svg', import.meta.url).href;

export function Showcase() {
  return (
    <div className='showcase-window'>
      <div className='showcase-toolbar'>
        <Box d='flex' alignItems='center' gap={2}>
          <Image src={logo} alt='' width={30} height={24} />
          <Box component='strong'>React Bootstrap Pro</Box>
          <Badge theme='primary' variant='subtle'>
            v0.5.0
          </Badge>
        </Box>
        <Nav variant='pills'>
          <NavItem>
            <NavLink href='#showcase-dashboard' active>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#showcase-projects'>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#showcase-team'>Team</NavLink>
          </NavItem>
        </Nav>
        <Box className='showcase-toolbar-end'>
          <FormControl component='label' adorn className='showcase-search'>
            <FormAdornIcon aria-hidden='true'>
              <BiSearch />
            </FormAdornIcon>
            <Input ghost type='search' placeholder='Search' aria-label='Search' />
          </FormControl>
          <Button variant='solid' theme='primary'>
            <BiPlus aria-hidden='true' />
            New
          </Button>
          <IconButton variant='subtle' aria-label='Notifications'>
            <BiBell aria-hidden='true' />
          </IconButton>
          <Avatar size='lg' theme='accent'>
            GH
            <AvatarStatus status='online' aria-label='Online' aria-hidden={false} />
          </Avatar>
        </Box>
      </div>
      <div className='showcase-body'>
        <div className='showcase-column'>
          <Stepper horizontal>
            <StepperItem active aria-current='false' theme='accent'>
              Cart
            </StepperItem>
            <StepperItem active theme='accent'>
              Shipping
            </StepperItem>
            <StepperItem active theme='accent'>
              Payment
            </StepperItem>
          </Stepper>
          <Alert theme='info' d='flex' alignItems='center' gap={2}>
            <BiCheckCircle size={20} aria-hidden='true' />
            <span>A new release is ready to install.</span>
            <CloseButton label='Dismiss alert' ms='auto' />
          </Alert>
          <div className='showcase-row'>
            <Box>
              <FormLabel htmlFor='showcase-email'>Email address</FormLabel>
              <InputGroup>
                <InputGroupText id='showcase-email-addon'>@</InputGroupText>
                <Input
                  id='showcase-email'
                  type='email'
                  placeholder='username'
                  aria-describedby='showcase-email-addon'
                />
              </InputGroup>
            </Box>
            <FormField>
              <FormLabel htmlFor='showcase-plan'>Plan</FormLabel>
              <Select id='showcase-plan' defaultValue='pro'>
                <option value='free'>Free</option>
                <option value='pro'>Pro</option>
                <option value='team'>Team</option>
              </Select>
            </FormField>
          </div>
          <div className='showcase-row'>
            <Box>
              <FormLabel htmlFor='showcase-range'>Volume</FormLabel>
              <Range id='showcase-range' defaultValue={60} />
            </Box>
            <FormField>
              <FormLabel htmlFor='showcase-date'>Start date</FormLabel>
              <DatePicker id='showcase-date' w={100} />
            </FormField>
          </div>
          <div className='showcase-row'>
            <Box d='flex' flexDirection='column' gap={2}>
              <FormField>
                <Switch id='showcase-switch-notifications' theme='success' defaultChecked />
                <label htmlFor='showcase-switch-notifications'>Notifications</label>
              </FormField>
              <FormField>
                <Switch id='showcase-switch-autosave' theme='info' defaultChecked />
                <label htmlFor='showcase-switch-autosave'>Auto-save</label>
              </FormField>
            </Box>
            <Box d='flex' flexDirection='column' gap={2}>
              <Box component='label' d='flex' alignItems='center' gap={2}>
                <Checkbox id='showcase-checkbox-email' theme='accent' defaultChecked /> Email
                updates
              </Box>
              <Box component='label' d='flex' alignItems='center' gap={2}>
                <Checkbox id='showcase-checkbox-digest' /> Weekly digest
              </Box>
            </Box>
          </div>
          <Box>
            <FormLabel htmlFor='showcase-otp'>Verification code</FormLabel>
            <OTPInput id='showcase-otp' defaultValue='426' groups={[3, 3]} />
          </Box>
          <Box>
            <FormLabel htmlFor='showcase-password'>Password</FormLabel>
            <Input type='password' id='showcase-password' defaultValue='Bootstrap6!' />
            <PasswordStrength value='Bootstrap6!' />
          </Box>
          <Box d='flex' flexWrap='wrap' gap={2}>
            <Button variant='solid' theme='primary'>
              Save changes
            </Button>
            <Button variant='outline' theme='secondary'>
              Cancel
            </Button>
            <Button variant='subtle' theme='danger'>
              Delete
            </Button>
          </Box>
          <Box border rounded p={3} d='flex' flexDirection='column' gap={2} aria-hidden='true'>
            <Placeholder w={50} />
            <Placeholder w={100} />
            <Placeholder w={75} />
          </Box>
        </div>
        <div className='showcase-column'>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href='#showcase-home'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbDivider />
            <BreadcrumbItem>
              <BreadcrumbLink href='#showcase-projects'>Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbDivider />
            <BreadcrumbItem aria-current='page'>
              <BreadcrumbLink href='#showcase-design' active>
                Design
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className='showcase-row'>
            <Box d='flex' flexWrap='wrap' alignItems='center' gap={2}>
              <Chip theme='primary'>React</Chip>
              <Chip theme='success' icon={<BiCheckCircle />}>
                Done
              </Chip>
            </Box>
            <Pagination theme='accent'>
              <PaginationItem>
                <PageLink href='#showcase-page-1'>1</PageLink>
              </PaginationItem>
              <PaginationItem>
                <PageLink href='#showcase-page-2' active>
                  2
                </PageLink>
              </PaginationItem>
              <PaginationItem>
                <PageLink href='#showcase-page-3'>3</PageLink>
              </PaginationItem>
            </Pagination>
          </div>
          <ListGroup>
            <ListGroupItem>Deploy preview is ready</ListGroupItem>
            <ListGroupItem>Documentation was updated</ListGroupItem>
          </ListGroup>
          <Box d='flex' flexDirection='column' gap={3}>
            <Progress label='Storage used' value={72}>
              72%
            </Progress>
            <Progress label='Traffic' value={40} barProps={{ bg: 'success' }}>
              40%
            </Progress>
          </Box>
          <Accordion theme='info' size='sm'>
            <AccordionItem name='showcase-accordion' open>
              <AccordionHeader>Shipping</AccordionHeader>
              <AccordionBody>Orders ship within two business days.</AccordionBody>
            </AccordionItem>
            <AccordionItem name='showcase-accordion'>
              <AccordionHeader>Returns</AccordionHeader>
              <AccordionBody>Return any item within 30 days.</AccordionBody>
            </AccordionItem>
          </Accordion>
          <div className='showcase-row'>
            <Box d='flex' flexWrap='wrap' alignItems='center' gap={3}>
              <Spinner label='Loading' fg='primary' />
              <Spinner variant='grow' label='Loading' fg='success' />
              <Badge theme='primary' variant='subtle'>
                <Spinner size='sm' aria-hidden />
                <span role='status'>Syncing</span>
              </Badge>
            </Box>
            <ButtonGroup size='sm' aria-label='Time range'>
              <Button variant='outline' theme='secondary'>
                Day
              </Button>
              <Button variant='outline' theme='secondary' active>
                Week
              </Button>
              <Button variant='outline' theme='secondary'>
                Month
              </Button>
            </ButtonGroup>
          </div>
          <Table card small striped hover>
            <TableHead>
              <TableRow>
                <TableHeader scope='col'>Name</TableHeader>
                <TableHeader scope='col'>Status</TableHeader>
                <TableHeader scope='col'>Role</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableHeader scope='row'>Mark</TableHeader>
                <TableCell>
                  <Badge theme='success' variant='subtle'>
                    Active
                  </Badge>
                </TableCell>
                <TableCell>Admin</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope='row'>Jacob</TableHeader>
                <TableCell>
                  <Badge theme='warning' variant='subtle'>
                    Away
                  </Badge>
                </TableCell>
                <TableCell>Editor</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope='row'>John</TableHeader>
                <TableCell>
                  <Badge theme='danger' variant='subtle'>
                    Blocked
                  </Badge>
                </TableCell>
                <TableCell>Viewer</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Toast show>
            <ToastHeader>
              <Box component='strong' me='auto'>
                Build finished
              </Box>
              <small>Just now</small>
              <CloseButton aria-label='Close toast' />
            </ToastHeader>
            <ToastBody>Version 0.5.0 was published to the registry.</ToastBody>
          </Toast>
        </div>
      </div>
    </div>
  );
}
