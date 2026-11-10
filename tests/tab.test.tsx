import { useState } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import type { NavValue } from '../src';
import { Nav, NavItem, NavLink, TabContent, TabPane } from '../src';

function ControlledTabs() {
  const [value, setValue] = useState<NavValue>('home');

  return (
    <>
      <Nav
        variant='tabs'
        role='tablist'
        aria-label='Controlled tabs'
        value={value}
        onChange={(_, next) => setValue(next)}
      >
        <NavItem role='presentation'>
          <NavLink value='home'>Home</NavLink>
        </NavItem>
        <NavItem role='presentation'>
          <NavLink value='profile'>Profile</NavLink>
        </NavItem>
      </Nav>
      <TabContent value={value}>
        <TabPane value='home'>Home content</TabPane>
        <TabPane value='profile'>Profile content</TabPane>
      </TabContent>
    </>
  );
}

test('connects tab controls to panels', async () => {
  const screen = await render(
    <>
      <Nav variant='tabs' role='tablist' aria-label='Example tabs' value='overview'>
        <NavItem role='presentation'>
          <NavLink value='overview' targetId='overview'>
            Overview
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent value='overview'>
        <TabPane value='overview' id='overview'>
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
    <Nav variant='tabs' role='tablist' value='disabled'>
      <NavItem role='presentation'>
        <NavLink value='disabled' disabled>
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

test('switches Nav and TabContent through value and onChange', async () => {
  const screen = await render(<ControlledTabs />);
  const home = screen.getByRole('tab', { name: 'Home' });
  const profile = screen.getByRole('tab', { name: 'Profile' });

  expect(home).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByText('Home content')).toBeVisible();

  await profile.click();

  expect(home).toHaveAttribute('aria-selected', 'false');
  expect(profile).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByText('Home content')).not.toBeVisible();
  expect(screen.getByText('Profile content')).toBeVisible();
});

test('keeps NavLink as a navigation link without a controlled Nav value', async () => {
  const screen = await render(
    <Nav variant='tabs'>
      <NavItem>
        <NavLink active href='#'>
          Overview
        </NavLink>
      </NavItem>
    </Nav>,
  );

  const link = screen.getByRole('link', { name: 'Overview' });

  expect(link.element().tagName).toBe('A');
  expect(link).toHaveAttribute('aria-current', 'page');
  expect(link).not.toHaveAttribute('role');
  expect(link).not.toHaveAttribute('aria-selected');
  expect(link).not.toHaveAttribute('data-bs-target');
});
