import { Nav, NavItem, NavLink, NavOverflow } from 'react-bootstrap-pro';

export function NavOverflowDisabledDemo() {
  return (
    <>
      <NavOverflow style={{ maxWidth: 300 }}>
        <Nav variant='pills'>
          <NavItem>
            <NavLink href='#' active>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Another link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>More content</NavLink>
          </NavItem>
        </Nav>
      </NavOverflow>
    </>
  );
}
