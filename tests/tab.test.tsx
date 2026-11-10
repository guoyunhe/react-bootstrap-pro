import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Nav, NavItem, NavLink, TabContent, TabPane } from '../src';

test('connects tab controls to panels', async () => {
  const screen = await render(
    <>
      <Nav variant='tabs' role='tablist' aria-label='Example tabs'>
        <NavItem role='presentation'>
          <NavLink tab active targetId='overview'>
            Overview
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane active id='overview'>
          Overview content
        </TabPane>
      </TabContent>
    </>,
  );

  const tab = screen.getByRole('tab', { name: 'Overview' });

  expect(screen.getByRole('tablist', { name: 'Example tabs' })).toHaveClass('nav', 'nav-tabs');
  expect(tab.element().tagName).toBe('BUTTON');
  expect(tab).toHaveAttribute('type', 'button');
  expect(tab).toHaveAttribute('aria-selected', 'true');
  expect(tab).toHaveAttribute('aria-controls', 'overview');
  expect(tab).toHaveAttribute('data-bs-target', '#overview');
  expect(tab).not.toHaveAttribute('aria-current');
  expect(screen.getByRole('tabpanel', { name: '' })).toHaveClass('tab-pane', 'active');
});

test('renders disabled tab controls as native buttons', async () => {
  const screen = await render(
    <Nav variant='tabs' role='tablist'>
      <NavItem role='presentation'>
        <NavLink tab disabled>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>,
  );

  const tab = screen.getByRole('tab', { name: 'Disabled' });

  expect(tab.element()).toBeInstanceOf(HTMLButtonElement);
  expect(tab).toBeDisabled();
  expect(tab).toHaveClass('nav-link', 'disabled');
  expect(tab).not.toHaveAttribute('aria-disabled');
});
