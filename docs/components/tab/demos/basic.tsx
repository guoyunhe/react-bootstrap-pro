import { useState } from 'react';
import { Box, Tab, TabContent, TabItem, TabList, TabPane } from 'react-bootstrap-pro';

export function TabBasicDemo() {
  const [active, setActive] = useState('home');

  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <TabList aria-label='Example tabs'>
        <TabItem>
          <Tab
            id='example-home-tab'
            active={active === 'home'}
            targetId='example-home-pane'
            onClick={() => setActive('home')}
          >
            Home
          </Tab>
        </TabItem>
        <TabItem>
          <Tab
            id='example-profile-tab'
            active={active === 'profile'}
            targetId='example-profile-pane'
            onClick={() => setActive('profile')}
          >
            Profile
          </Tab>
        </TabItem>
        <TabItem>
          <Tab
            id='example-contact-tab'
            active={active === 'contact'}
            targetId='example-contact-pane'
            onClick={() => setActive('contact')}
          >
            Contact
          </Tab>
        </TabItem>
        <TabItem>
          <Tab id='example-disabled-tab' targetId='example-disabled-pane' disabled>
            Disabled
          </Tab>
        </TabItem>
      </TabList>
      <TabContent>
        <TabPane
          active={active === 'home'}
          id='example-home-pane'
          aria-labelledby='example-home-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Home tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          active={active === 'profile'}
          id='example-profile-pane'
          aria-labelledby='example-profile-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Profile tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane
          active={active === 'contact'}
          id='example-contact-pane'
          aria-labelledby='example-contact-tab'
          tabIndex={0}
        >
          <p>
            This is some placeholder content the <strong>Contact tab’s</strong> associated content.
          </p>
        </TabPane>
        <TabPane id='example-disabled-pane' aria-labelledby='example-disabled-tab' tabIndex={0}>
          <p>
            This is some placeholder content the <strong>Disabled tab’s</strong> associated content.
          </p>
        </TabPane>
      </TabContent>
    </Box>
  );
}
