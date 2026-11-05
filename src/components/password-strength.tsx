import clsx from 'clsx';
import { Fragment, useEffect, useRef } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type PasswordStrengthLevel = 'weak' | 'fair' | 'good' | 'strong';
export type PasswordStrengthVariant = 'segments' | 'bar';
export type PasswordStrengthMessages = Partial<Record<PasswordStrengthLevel, string>>;

export type PasswordStrengthWeights = {
  minLength?: number | undefined;
  extraLength?: number | undefined;
  lowercase?: number | undefined;
  uppercase?: number | undefined;
  numbers?: number | undefined;
  special?: number | undefined;
  multipleSpecial?: number | undefined;
  longPassword?: number | undefined;
};

export type PasswordStrengthThresholds = readonly [weak: number, fair: number, good: number];

type PasswordStrengthOwnProps = {
  /** Password to evaluate. */
  value?: string | undefined;
  /** Fixed level for static displays; ignored when `value` is set. */
  strength?: PasswordStrengthLevel | undefined;
  /** Segmented meter (default) or a single progress bar. */
  variant?: PasswordStrengthVariant | undefined;
  minLength?: number | undefined;
  messages?: PasswordStrengthMessages | undefined;
  /** Points for each scoring criterion. Set a weight to `0` to disable it. */
  weights?: PasswordStrengthWeights | undefined;
  /** Score boundaries for weak, fair, and good. Higher scores are strong. */
  thresholds?: PasswordStrengthThresholds | undefined;
  /** Replaces the built-in scoring function. */
  scorer?: ((password: string) => number) | undefined;
  /** Renders the `.strength-text` feedback message. */
  showText?: boolean | undefined;
  /** Called when the strength level changes. */
  onChange?: ((strength: PasswordStrengthLevel | undefined, score: number) => void) | undefined;
};

export type PasswordStrengthProps = PasswordStrengthOwnProps &
  Omit<BoxProps<'div'>, keyof PasswordStrengthOwnProps | 'children'>;

const LEVELS = ['weak', 'fair', 'good', 'strong'] as const;
const SEGMENT_COUNT = LEVELS.length;

const DEFAULT_MESSAGES: Record<PasswordStrengthLevel, string> = {
  weak: 'Weak',
  fair: 'Fair',
  good: 'Good',
  strong: 'Strong',
};

type ResolvedWeights = Record<keyof PasswordStrengthWeights, number>;

function resolveWeights(weights: PasswordStrengthWeights | undefined): ResolvedWeights {
  return {
    minLength: weights?.minLength ?? 1,
    extraLength: weights?.extraLength ?? 1,
    lowercase: weights?.lowercase ?? 1,
    uppercase: weights?.uppercase ?? 1,
    numbers: weights?.numbers ?? 1,
    special: weights?.special ?? 1,
    multipleSpecial: weights?.multipleSpecial ?? 1,
    longPassword: weights?.longPassword ?? 1,
  };
}

const DEFAULT_THRESHOLDS: PasswordStrengthThresholds = [2, 4, 6];

const SPECIAL_CHARACTER = /[!@#$%^&*(),.?":{}|<>]/;
const MULTIPLE_SPECIAL_CHARACTERS = /[!@#$%^&*(),.?":{}|<>].*[!@#$%^&*(),.?":{}|<>]/;

function calculateScore(
  password: string,
  minLength: number,
  weights: ResolvedWeights,
  scorer: ((password: string) => number) | undefined,
) {
  if (!password) {
    return 0;
  }

  if (scorer) {
    return scorer(password);
  }

  let score = 0;

  if (password.length >= minLength) {
    score += weights.minLength;
  }

  if (password.length >= minLength + 4) {
    score += weights.extraLength;
  }

  if (/[a-z]/.test(password)) {
    score += weights.lowercase;
  }

  if (/[A-Z]/.test(password)) {
    score += weights.uppercase;
  }

  if (/\d/.test(password)) {
    score += weights.numbers;
  }

  if (SPECIAL_CHARACTER.test(password)) {
    score += weights.special;
  }

  if (MULTIPLE_SPECIAL_CHARACTERS.test(password)) {
    score += weights.multipleSpecial;
  }

  if (password.length >= 16) {
    score += weights.longPassword;
  }

  return score;
}

function scoreToLevel(
  score: number,
  [weak, fair, good]: PasswordStrengthThresholds,
): PasswordStrengthLevel | undefined {
  if (score === 0) {
    return undefined;
  }

  if (score <= weak) {
    return 'weak';
  }

  if (score <= fair) {
    return 'fair';
  }

  if (score <= good) {
    return 'good';
  }

  return 'strong';
}

export function PasswordStrength({
  value,
  strength,
  variant = 'segments',
  minLength = 8,
  messages,
  weights,
  thresholds = DEFAULT_THRESHOLDS,
  scorer,
  showText = false,
  onChange,
  classNameBefore,
  className,
  ...props
}: PasswordStrengthProps) {
  const score = calculateScore(value ?? '', minLength, resolveWeights(weights), scorer);
  const level = strength ?? scoreToLevel(score, thresholds);
  const previousLevelRef = useRef<PasswordStrengthLevel | undefined>(undefined);

  useEffect(() => {
    if (previousLevelRef.current === level) {
      return;
    }

    previousLevelRef.current = level;
    onChange?.(level, score);
  });

  const activeSegments = level === undefined ? 0 : LEVELS.indexOf(level) + 1;
  const message = level === undefined ? '' : { ...DEFAULT_MESSAGES, ...messages }[level];

  return (
    <Fragment>
      <Box
        {...props}
        classNameBefore={clsx(variant === 'bar' ? 'strength-bar' : 'strength', classNameBefore)}
        className={className}
        data-bs-strength={level}
      >
        {variant === 'segments' &&
          Array.from({ length: SEGMENT_COUNT }, (_, index) => (
            <Box
              key={index}
              classNameBefore={clsx('strength-segment', index < activeSegments && 'active')}
            />
          ))}
      </Box>
      {showText && (
        <Box
          component='span'
          classNameBefore='strength-text'
          data-bs-strength={level}
          aria-live='polite'
        >
          {message}
        </Box>
      )}
    </Fragment>
  );
}
