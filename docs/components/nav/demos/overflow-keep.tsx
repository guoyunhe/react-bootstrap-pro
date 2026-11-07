import { Nav, NavItem, NavLink, NavOverflow } from 'react-bootstrap-pro';

export function NavOverflowKeepDemo() {
  return (
    <>
      <NavOverflow style={{ maxWidth: 400 }}>
        <Nav variant='pills'>
          <NavItem className='nav-overflow-keep'>
            <NavLink href='#' active>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Careers</NavLink>
          </NavItem>
          <NavItem className='nav-overflow-keep'>
            <NavLink href='#'>Contact</NavLink>
          </NavItem>
        </Nav>
      </NavOverflow>
    </>
  );
}
