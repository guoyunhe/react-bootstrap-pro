import { useState } from 'react';
import { Box, Tab, TabContent, TabPane } from 'react-bootstrap-pro';

export function TabVerticalPillsDemo() {
  const [active, setActive] = useState('home');

  return (
    <Box d='flex' alignItems='start' gap={4}>
      <Box
        component='div'
        className='nav nav-pills nav-pills-vertical'
        role='tablist'
        aria-orientation='vertical'
        aria-label='Vertical pills tabs'
      >
        <Tab
          id='v-pills-home-tab'
          active={active === 'home'}
          targetId='v-pills-home-pane'
          onClick={() => setActive('home')}
        >
          Home
        </Tab>
        <Tab
          id='v-pills-profile-tab'
          active={active === 'profile'}
          targetId='v-pills-profile-pane'
          onClick={() => setActive('profile')}
        >
          Profile
        </Tab>
        <Tab id='v-pills-disabled-tab' targetId='v-pills-disabled-pane' disabled>
          Disabled
        </Tab>
        <Tab
          id='v-pills-messages-tab'
          active={active === 'messages'}
          targetId='v-pills-messages-pane'
          onClick={() => setActive('messages')}
        >
          Messages
        </Tab>
        <Tab
          id='v-pills-settings-tab'
          active={active === 'settings'}
          targetId='v-pills-settings-pane'
          onClick={() => setActive('settings')}
        >
          Settings
        </Tab>
      </Box>
      <TabContent flexGrow={1}>
        <TabPane
          active={active === 'home'}
          id='v-pills-home-pane'
          aria-labelledby='v-pills-home-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Home tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          active={active === 'profile'}
          id='v-pills-profile-pane'
          aria-labelledby='v-pills-profile-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Profile tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane id='v-pills-disabled-pane' aria-labelledby='v-pills-disabled-tab' tabIndex={0}>
          <p>
            This is some placeholder content the <strong>Disabled tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          active={active === 'messages'}
          id='v-pills-messages-pane'
          aria-labelledby='v-pills-messages-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Messages tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          active={active === 'settings'}
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
