import { Nav, NavItem, NavLink, NavOverflow } from 'react-bootstrap-pro';

import { useNavOverflow } from '../use-nav-overflow';

export function NavOverflowCollapseDemo() {
  const ref = useNavOverflow();
  return (
    <div ref={ref}>
      <NavOverflow data-bs-collapse-below='md' style={{ maxWidth: 400 }}>
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
    </div>
  );
}
