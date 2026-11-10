import { useState } from 'react';
import type { NavValue } from 'react-bootstrap-pro';
import { Box, Nav, NavLink, TabContent, TabPane } from 'react-bootstrap-pro';

export function TabWithButtonsDemo() {
  const [value, setValue] = useState<NavValue>('home');

  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box component='nav'>
        <Nav
          component='div'
          variant='tabs'
          role='tablist'
          aria-label='Nav buttons tabs'
          value={value}
          onChange={(_, next) => setValue(next)}
        >
          <NavLink value='home' id='nav-home-tab' targetId='nav-home-pane'>
            Home
          </NavLink>
          <NavLink value='profile' id='nav-profile-tab' targetId='nav-profile-pane'>
            Profile
          </NavLink>
          <NavLink value='contact' id='nav-contact-tab' targetId='nav-contact-pane'>
            Contact
          </NavLink>
          <NavLink value='disabled' id='nav-disabled-tab' targetId='nav-disabled-pane' disabled>
            Disabled
          </NavLink>
        </Nav>
      </Box>
      <TabContent value={value}>
        <TabPane value='home' id='nav-home-pane' aria-labelledby='nav-home-tab' tabIndex={0}>
          <p>
            This is some placeholder content the <strong>Home tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='profile'
          id='nav-profile-pane'
          aria-labelledby='nav-profile-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Profile tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='contact'
          id='nav-contact-pane'
          aria-labelledby='nav-contact-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Contact tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='disabled'
          id='nav-disabled-pane'
          aria-labelledby='nav-disabled-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Disabled tab’s</strong> associated content.
          </p>
        </TabPane>
      </TabContent>
    </Box>
  );
}
