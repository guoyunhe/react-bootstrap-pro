import { Nav, NavItem, NavLink, NavOverflow } from 'react-bootstrap-pro';

import { useNavOverflow } from '../use-nav-overflow';

export function NavOverflowDemo() {
  const ref = useNavOverflow();
  return (
    <div ref={ref}>
      <NavOverflow style={{ maxWidth: 400 }}>
        <Nav variant='pills'>
          <NavItem>
            <NavLink href='#' active>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Reports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Settings</NavLink>
          </NavItem>
        </Nav>
      </NavOverflow>
    </div>
  );
}
