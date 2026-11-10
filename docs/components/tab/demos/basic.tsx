import { useState } from 'react';
import type { NavValue } from 'react-bootstrap-pro';
import { Box, Nav, NavItem, NavLink, TabContent, TabPane } from 'react-bootstrap-pro';

export function TabBasicDemo() {
  const [value, setValue] = useState<NavValue>('home');

  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Nav
        variant='tabs'
        role='tablist'
        aria-label='Example tabs'
        value={value}
        onChange={(_, next) => setValue(next)}
      >
        <NavItem role='presentation'>
          <NavLink value='home' id='example-home-tab' targetId='example-home-pane'>
            Home
          </NavLink>
        </NavItem>
        <NavItem role='presentation'>
          <NavLink value='profile' id='example-profile-tab' targetId='example-profile-pane'>
            Profile
          </NavLink>
        </NavItem>
        <NavItem role='presentation'>
          <NavLink value='contact' id='example-contact-tab' targetId='example-contact-pane'>
            Contact
          </NavLink>
        </NavItem>
        <NavItem role='presentation'>
          <NavLink
            value='disabled'
            id='example-disabled-tab'
            targetId='example-disabled-pane'
            disabled
          >
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent value={value}>
        <TabPane
          value='home'
          id='example-home-pane'
          aria-labelledby='example-home-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Home tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='profile'
          id='example-profile-pane'
          aria-labelledby='example-profile-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Profile tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='contact'
          id='example-contact-pane'
          aria-labelledby='example-contact-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Contact tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='disabled'
          id='example-disabled-pane'
          aria-labelledby='example-disabled-tab'
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
