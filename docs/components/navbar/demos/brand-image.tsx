import { Container, Image, Navbar, NavbarBrand } from 'react-bootstrap-pro';

const logo = new URL('../../../favicon.svg', import.meta.url).href;

export function NavbarBrandImageDemo() {
  return (
    <Navbar bg='1' fg='2'>
      <Container>
        <NavbarBrand href='#'>
          <Image src={logo} alt='Bootstrap' width={30} height={24} />
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}
