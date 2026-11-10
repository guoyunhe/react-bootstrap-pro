import { useState } from 'react';
import type { NavValue } from 'react-bootstrap-pro';
import { Box, Nav, NavItem, NavLink, TabContent, TabPane } from 'react-bootstrap-pro';

export function TabPillsDemo() {
  const [value, setValue] = useState<NavValue>('home');

  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Nav
        variant='pills'
        role='tablist'
        aria-label='Pills tabs'
        value={value}
        onChange={(_, next) => setValue(next)}
      >
        <NavItem role='presentation'>
          <NavLink value='home' id='pills-home-tab' targetId='pills-home-pane'>
            Home
          </NavLink>
        </NavItem>
        <NavItem role='presentation'>
          <NavLink value='profile' id='pills-profile-tab' targetId='pills-profile-pane'>
            Profile
          </NavLink>
        </NavItem>
        <NavItem role='presentation'>
          <NavLink value='contact' id='pills-contact-tab' targetId='pills-contact-pane'>
            Contact
          </NavLink>
        </NavItem>
        <NavItem role='presentation'>
          <NavLink value='disabled' id='pills-disabled-tab' targetId='pills-disabled-pane' disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent value={value}>
        <TabPane value='home' id='pills-home-pane' aria-labelledby='pills-home-tab' tabIndex={0}>
          <p>
            This is some placeholder content the <strong>Home tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='profile'
          id='pills-profile-pane'
          aria-labelledby='pills-profile-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Profile tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='contact'
          id='pills-contact-pane'
          aria-labelledby='pills-contact-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Contact tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='disabled'
          id='pills-disabled-pane'
          aria-labelledby='pills-disabled-tab'
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
