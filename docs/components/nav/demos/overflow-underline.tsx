import { Nav, NavItem, NavLink, NavOverflow } from 'react-bootstrap-pro';

import { useNavOverflow } from '../use-nav-overflow';

export function NavOverflowUnderlineDemo() {
  const ref = useNavOverflow();
  return (
    <div ref={ref}>
      <NavOverflow style={{ maxWidth: 400 }}>
        <Nav variant='underline'>
          <NavItem>
            <NavLink href='#' active>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Contact</NavLink>
          </NavItem>
        </Nav>
      </NavOverflow>
    </div>
  );
}
