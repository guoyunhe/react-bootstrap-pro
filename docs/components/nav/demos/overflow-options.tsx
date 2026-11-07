import { Nav, NavItem, NavLink, NavOverflow } from 'react-bootstrap-pro';

import { useNavOverflow } from '../use-nav-overflow';

export function NavOverflowOptionsDemo() {
  const ref = useNavOverflow();
  return (
    <div ref={ref}>
      <NavOverflow
        data-bs-more-text='See all'
        data-bs-icon-placement='end'
        data-bs-threshold='2'
        style={{ maxWidth: 300 }}
      >
        <Nav variant='pills'>
          <NavItem>
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
            <NavLink href='#'>Reports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Contact</NavLink>
          </NavItem>
        </Nav>
      </NavOverflow>
    </div>
  );
}
