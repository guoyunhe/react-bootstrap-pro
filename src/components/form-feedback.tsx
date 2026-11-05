import clsx from 'clsx';

import { Box } from './box';
import type { BoxProps } from './box';
import type { ValidationState } from './shared';

export type FormFeedbackType = ValidationState;

type FormFeedbackOwnProps = {
  type?: FormFeedbackType | undefined;
  /** Renders a `.tooltip` instead of the inline feedback text. */
  tooltip?: boolean | undefined;
};

export type FormFeedbackProps = FormFeedbackOwnProps &
  Omit<BoxProps<'div'>, keyof FormFeedbackOwnProps>;

export function FormFeedback({
  type = 'invalid',
  tooltip = false,
  className,
  classNameBefore,
  ...props
}: FormFeedbackProps) {
  return (
    <Box
      {...props}
      classNameBefore={clsx(
        tooltip ? `tooltip ${type}-tooltip` : `${type}-feedback`,
        classNameBefore,
      )}
      className={className}
    />
  );
}
