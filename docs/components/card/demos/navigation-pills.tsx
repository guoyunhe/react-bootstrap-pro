import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
} from 'react-bootstrap-pro';

export function CardNavigationPillsDemo() {
  return (
    <Card className='text-center'>
      <CardHeader>
        <Nav variant='pills'>
          <NavItem>
            <NavLink href='#active' active aria-current='true'>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#link'>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
      </CardHeader>
      <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button variant='solid' theme='primary' component='a' href='#card-action' mx='auto'>
          Go somewhere
        </Button>
      </CardBody>
    </Card>
  );
}
