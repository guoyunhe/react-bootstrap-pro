import { Nav, NavLink } from 'react-bootstrap-pro';

export function NavResponsiveDemo() {
  return (
    <Nav
      component='nav'
      aria-label='Responsive navigation'
      variant='pills'
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <NavLink href='#' active flex={{ sm: 'fill' }} textAlign={{ sm: 'center' }}>
        Active
      </NavLink>
      <NavLink href='#' flex={{ sm: 'fill' }} textAlign={{ sm: 'center' }}>
        Longer nav link
      </NavLink>
      <NavLink href='#' flex={{ sm: 'fill' }} textAlign={{ sm: 'center' }}>
        Link
      </NavLink>
      <NavLink disabled flex={{ sm: 'fill' }} textAlign={{ sm: 'center' }}>
        Disabled
      </NavLink>
    </Nav>
  );
}
