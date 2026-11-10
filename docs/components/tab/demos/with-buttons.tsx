import { useState } from 'react';
import { Box, Tab, TabContent, TabList, TabPane } from 'react-bootstrap-pro';

export function TabWithButtonsDemo() {
  const [active, setActive] = useState('home');

  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box component='nav'>
        <TabList component='div' aria-label='Nav buttons tabs'>
          <Tab
            id='nav-home-tab'
            active={active === 'home'}
            targetId='nav-home-pane'
            onClick={() => setActive('home')}
          >
            Home
          </Tab>
          <Tab
            id='nav-profile-tab'
            active={active === 'profile'}
            targetId='nav-profile-pane'
            onClick={() => setActive('profile')}
          >
            Profile
          </Tab>
          <Tab
            id='nav-contact-tab'
            active={active === 'contact'}
            targetId='nav-contact-pane'
            onClick={() => setActive('contact')}
          >
            Contact
          </Tab>
          <Tab id='nav-disabled-tab' targetId='nav-disabled-pane' disabled>
            Disabled
          </Tab>
        </TabList>
      </Box>
      <TabContent>
        <TabPane
          active={active === 'home'}
          id='nav-home-pane'
          aria-labelledby='nav-home-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Home tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          active={active === 'profile'}
          id='nav-profile-pane'
          aria-labelledby='nav-profile-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Profile tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          active={active === 'contact'}
          id='nav-contact-pane'
          aria-labelledby='nav-contact-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Contact tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane id='nav-disabled-pane' aria-labelledby='nav-disabled-tab' tabIndex={0}>
          <p>
            This is some placeholder content the <strong>Disabled tab’s</strong> associated content.
          </p>
        </TabPane>
      </TabContent>
    </Box>
  );
}
