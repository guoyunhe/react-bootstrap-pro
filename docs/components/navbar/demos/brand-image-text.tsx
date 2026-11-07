import { Container, Image, Navbar, NavbarBrand } from 'react-bootstrap-pro';

const logo = new URL('../../../favicon.svg', import.meta.url).href;

export function NavbarBrandImageTextDemo() {
  return (
    <Navbar bg='1' fg='2'>
      <Container fluid>
        <NavbarBrand href='#'>
          <Image
            src={logo}
            alt=''
            width={30}
            height={24}
            d='inline-block'
            verticalAlign='text-top'
          />{' '}
          Bootstrap
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}
