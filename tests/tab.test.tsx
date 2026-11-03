import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Tab, TabContent, TabItem, TabList, TabPane } from '../src';

test('connects tab controls to panels', async () => {
  const screen = await render(
    <>
      <TabList>
        <TabItem>
          <Tab active targetId='overview'>
            Overview
          </Tab>
        </TabItem>
      </TabList>
      <TabContent>
        <TabPane active id='overview'>
          Overview content
        </TabPane>
      </TabContent>
    </>,
  );

  expect(screen.getByRole('tab', { name: 'Overview' })).toHaveAttribute(
    'data-bs-target',
    '#overview',
  );
  expect(screen.getByRole('tabpanel', { name: '' })).toHaveClass('tab-pane', 'active');
});
