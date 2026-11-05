import clsx from 'clsx';

import type { ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type FormFeedbackType = ValidationState;

type FormFeedbackOwnProps = {
  type?: FormFeedbackType | undefined;
  /** Renders a `.tooltip` instead of the inline feedback text. */
  tooltip?: boolean | undefined;
};

export type FormFeedbackProps = FormFeedbackOwnProps & BoxProps<'div'>;

export function FormFeedback({
  type = 'invalid',
  tooltip = false,
  className,
  classNameBefore,
  ...props
}: FormFeedbackProps) {
  return (
    <Box
      {...(props as BoxProps)}
      classNameBefore={clsx(
        tooltip ? `tooltip ${type}-tooltip` : `${type}-feedback`,
        classNameBefore,
      )}
      className={className}
    />
  );
}
