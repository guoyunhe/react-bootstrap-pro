import { Nav, NavItem, NavLink, NavOverflow } from 'react-bootstrap-pro';

export function NavOverflowCollapseDemo() {
  return (
    <>
      <NavOverflow collapseBelow='md' style={{ maxWidth: 400 }}>
        <Nav variant='pills'>
          <NavItem>
            <NavLink href='#'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Contact</NavLink>
          </NavItem>
        </Nav>
      </NavOverflow>
    </>
  );
}
