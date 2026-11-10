import { useState } from 'react';
import { Box, ListGroup, ListGroupItem, TabContent, TabPane } from 'react-bootstrap-pro';

export function TabListGroupsDemo() {
  const [active, setActive] = useState('home');

  return (
    <Box d='flex' alignItems='start' gap={4}>
      <Box w={25}>
        <ListGroup component='div' role='tablist' aria-label='List group tabs'>
          <ListGroupItem
            component='button'
            type='button'
            action
            active={active === 'home'}
            id='list-home-tab'
            role='tab'
            aria-selected={active === 'home'}
            aria-controls='list-home-pane'
            onClick={() => setActive('home')}
          >
            Home
          </ListGroupItem>
          <ListGroupItem
            component='button'
            type='button'
            action
            active={active === 'profile'}
            id='list-profile-tab'
            role='tab'
            aria-selected={active === 'profile'}
            aria-controls='list-profile-pane'
            onClick={() => setActive('profile')}
          >
            Profile
          </ListGroupItem>
          <ListGroupItem
            component='button'
            type='button'
            action
            active={active === 'messages'}
            id='list-messages-tab'
            role='tab'
            aria-selected={active === 'messages'}
            aria-controls='list-messages-pane'
            onClick={() => setActive('messages')}
          >
            Messages
          </ListGroupItem>
          <ListGroupItem
            component='button'
            type='button'
            action
            active={active === 'settings'}
            id='list-settings-tab'
            role='tab'
            aria-selected={active === 'settings'}
            aria-controls='list-settings-pane'
            onClick={() => setActive('settings')}
          >
            Settings
          </ListGroupItem>
        </ListGroup>
      </Box>
      <Box w={75}>
        <TabContent>
          <TabPane
            active={active === 'home'}
            id='list-home-pane'
            aria-labelledby='list-home-tab'
            tabIndex={0}
          >
            <p>Some placeholder content in a paragraph relating to “Home”.</p>
          </TabPane>
          <TabPane
            active={active === 'profile'}
            id='list-profile-pane'
            aria-labelledby='list-profile-tab'
            tabIndex={0}
          >
            <p>Some placeholder content in a paragraph relating to “Profile”.</p>
          </TabPane>
          <TabPane
            active={active === 'messages'}
            id='list-messages-pane'
            aria-labelledby='list-messages-tab'
            tabIndex={0}
          >
            <p>Some placeholder content in a paragraph relating to “Messages”.</p>
          </TabPane>
          <TabPane
            active={active === 'settings'}
            id='list-settings-pane'
            aria-labelledby='list-settings-tab'
            tabIndex={0}
          >
            <p>Some placeholder content in a paragraph relating to “Settings”.</p>
          </TabPane>
        </TabContent>
      </Box>
    </Box>
  );
}
