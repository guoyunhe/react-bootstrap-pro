import { TabList, TabItem, Tab, TabContent, TabPane } from 'react-bootstrap-pro';

export function TabBasicDemo() {
  return (
    <>
      <TabList aria-label='Example tabs'>
        <TabItem>
          <Tab id='home-tab' active targetId='home-pane'>
            Home
          </Tab>
        </TabItem>
        <TabItem>
          <Tab id='profile-tab' targetId='profile-pane'>
            Profile
          </Tab>
        </TabItem>
      </TabList>
      <TabContent>
        <TabPane active id='home-pane' aria-labelledby='home-tab'>
          Home content
        </TabPane>
        <TabPane id='profile-pane' aria-labelledby='profile-tab'>
          Profile content
        </TabPane>
      </TabContent>
    </>
  );
}
