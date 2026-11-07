import { Nav, NavItem, NavLink, NavOverflow } from 'react-bootstrap-pro';

export function NavOverflowTabsDemo() {
  return (
    <>
      <NavOverflow style={{ maxWidth: 400 }}>
        <Nav variant='tabs'>
          <NavItem>
            <NavLink href='#' active>
              Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Details</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>History</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Activity</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Comments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Related</NavLink>
          </NavItem>
        </Nav>
      </NavOverflow>
    </>
  );
}
