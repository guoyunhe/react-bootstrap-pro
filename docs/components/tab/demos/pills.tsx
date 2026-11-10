import { useState } from 'react';
import { Box, Tab, TabContent, TabItem, TabPane } from 'react-bootstrap-pro';

export function TabPillsDemo() {
  const [active, setActive] = useState('home');

  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box component='ul' className='nav nav-pills' role='tablist' aria-label='Pills tabs'>
        <TabItem>
          <Tab
            id='pills-home-tab'
            active={active === 'home'}
            targetId='pills-home-pane'
            onClick={() => setActive('home')}
          >
            Home
          </Tab>
        </TabItem>
        <TabItem>
          <Tab
            id='pills-profile-tab'
            active={active === 'profile'}
            targetId='pills-profile-pane'
            onClick={() => setActive('profile')}
          >
            Profile
          </Tab>
        </TabItem>
        <TabItem>
          <Tab
            id='pills-contact-tab'
            active={active === 'contact'}
            targetId='pills-contact-pane'
            onClick={() => setActive('contact')}
          >
            Contact
          </Tab>
        </TabItem>
        <TabItem>
          <Tab id='pills-disabled-tab' targetId='pills-disabled-pane' disabled>
            Disabled
          </Tab>
        </TabItem>
      </Box>
      <TabContent>
        <TabPane
          active={active === 'home'}
          id='pills-home-pane'
          aria-labelledby='pills-home-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Home tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          active={active === 'profile'}
          id='pills-profile-pane'
          aria-labelledby='pills-profile-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Profile tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          active={active === 'contact'}
          id='pills-contact-pane'
          aria-labelledby='pills-contact-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Contact tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane id='pills-disabled-pane' aria-labelledby='pills-disabled-tab' tabIndex={0}>
          <p>
            This is some placeholder content the <strong>Disabled tab’s</strong> associated content.
          </p>
        </TabPane>
      </TabContent>
    </Box>
  );
}
