import { useState } from 'react';
import type { NavValue } from 'react-bootstrap-pro';
import { Box, Nav, NavLink, TabContent, TabPane } from 'react-bootstrap-pro';

export function TabVerticalPillsDemo() {
  const [value, setValue] = useState<NavValue>('home');

  return (
    <Box d='flex' alignItems='start' gap={4}>
      <Nav
        component='div'
        variant='pills'
        orientation='vertical'
        role='tablist'
        aria-orientation='vertical'
        aria-label='Vertical pills tabs'
        value={value}
        onChange={(_, next) => setValue(next)}
      >
        <NavLink value='home' id='v-pills-home-tab' targetId='v-pills-home-pane'>
          Home
        </NavLink>
        <NavLink value='profile' id='v-pills-profile-tab' targetId='v-pills-profile-pane'>
          Profile
        </NavLink>
        <NavLink
          value='disabled'
          id='v-pills-disabled-tab'
          targetId='v-pills-disabled-pane'
          disabled
        >
          Disabled
        </NavLink>
        <NavLink value='messages' id='v-pills-messages-tab' targetId='v-pills-messages-pane'>
          Messages
        </NavLink>
        <NavLink value='settings' id='v-pills-settings-tab' targetId='v-pills-settings-pane'>
          Settings
        </NavLink>
      </Nav>
      <TabContent value={value} flexGrow={1}>
        <TabPane
          value='home'
          id='v-pills-home-pane'
          aria-labelledby='v-pills-home-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Home tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='profile'
          id='v-pills-profile-pane'
          aria-labelledby='v-pills-profile-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Profile tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='disabled'
          id='v-pills-disabled-pane'
          aria-labelledby='v-pills-disabled-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Disabled tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='messages'
          id='v-pills-messages-pane'
          aria-labelledby='v-pills-messages-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Messages tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          value='settings'
          id='v-pills-settings-pane'
          aria-labelledby='v-pills-settings-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Settings tab’s</strong> associated content.
          </p>
        </TabPane>
      </TabContent>
    </Box>
  );
}
