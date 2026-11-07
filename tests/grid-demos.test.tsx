import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { GridAllBreakpointsDemo } from '../docs/components/grid/demos/all-breakpoints';
import { GridBasicDemo } from '../docs/components/grid/demos/basic';
import { GridColumnWidthDemo } from '../docs/components/grid/demos/column-width';
import { GridEqualWidthDemo } from '../docs/components/grid/demos/equal-width';
import { GridMixMatchDemo } from '../docs/components/grid/demos/mix-match';
import { GridNestingDemo } from '../docs/components/grid/demos/nesting';
import { GridRowColsAutoDemo } from '../docs/components/grid/demos/row-cols-auto';
import { GridRowColsFourDemo } from '../docs/components/grid/demos/row-cols-four';
import { GridRowColsOverrideDemo } from '../docs/components/grid/demos/row-cols-override';
import { GridRowColsResponsiveDemo } from '../docs/components/grid/demos/row-cols-responsive';
import { GridRowColsThreeDemo } from '../docs/components/grid/demos/row-cols-three';
import { GridRowColsTwoDemo } from '../docs/components/grid/demos/row-cols-two';
import { GridStackedDemo } from '../docs/components/grid/demos/stacked';
import { GridVariableWidthDemo } from '../docs/components/grid/demos/variable-width';

test('grid documentation examples render their intended Bootstrap layouts', async () => {
  const screen = await render(
    <>
      <GridBasicDemo />
      <GridEqualWidthDemo />
      <GridColumnWidthDemo />
      <GridVariableWidthDemo />
      <GridAllBreakpointsDemo />
      <GridStackedDemo />
      <GridMixMatchDemo />
      <GridRowColsTwoDemo />
      <GridRowColsThreeDemo />
      <GridRowColsAutoDemo />
      <GridRowColsFourDemo />
      <GridRowColsOverrideDemo />
      <GridRowColsResponsiveDemo />
      <GridNestingDemo />
    </>,
  );
  const examples = screen.container.children;
  expect(examples).toHaveLength(14);
  expect(examples[0]?.querySelectorAll('.row > .col')).toHaveLength(3);
  expect(examples[1]?.querySelectorAll('.row')).toHaveLength(2);
  expect(examples[2]?.querySelector('.col-6')).not.toBeNull();
  expect(examples[2]?.querySelector('.col-5')).not.toBeNull();
  expect(examples[3]?.querySelector('.md\\:col-auto')).not.toBeNull();
  expect(examples[4]?.querySelector('.col-8')).not.toBeNull();
  expect(examples[5]?.querySelector('.sm\\:col')).not.toBeNull();
  expect(examples[6]?.querySelector('.col-6.md\\:col-4')).not.toBeNull();
  expect(examples[7]?.querySelector('.row-cols-2')).not.toBeNull();
  expect(examples[8]?.querySelector('.row-cols-3')).not.toBeNull();
  expect(examples[9]?.querySelector('.row-cols-auto')).not.toBeNull();
  expect(examples[10]?.querySelector('.row-cols-4')).not.toBeNull();
  const overriddenRow = examples[11]?.querySelector('.row-cols-4');
  const ordinaryColumn = overriddenRow?.querySelector('.col');
  const wideColumn = overriddenRow?.querySelector('.col-6');
  expect(ordinaryColumn).not.toBeNull();
  expect(wideColumn).not.toBeNull();
  if (!ordinaryColumn || !wideColumn) throw new Error('Missing row columns');
  expect(wideColumn.getBoundingClientRect().width).toBeCloseTo(
    ordinaryColumn.getBoundingClientRect().width * 2,
    0,
  );
  expect(examples[12]?.querySelector('.row-cols-1.sm\\:row-cols-2.md\\:row-cols-4')).not.toBeNull();
  expect(examples[13]?.querySelector('.row .row .col-8.sm\\:col-6')).not.toBeNull();
});
