import clsx from 'clsx';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  Calendar,
  months,
  type DateAny,
  type DateMode,
  type MonthsCount,
  type PositionToInput,
  type Range,
  type WeekDayID,
} from 'vanilla-calendar-pro';

export type DatepickerSelectionMode = DateMode;
export type DatepickerPlacement = PositionToInput;
export type DatepickerTheme = 'light' | 'dark' | 'auto';
export type DatepickerWeekDay = WeekDayID;
export type DatepickerMonthsCount = MonthsCount;
export type DatepickerDate = string | Date | number;
export type DatepickerTrigger = 'input' | 'button';
export type DatepickerFormat =
  | Intl.DateTimeFormatOptions
  | ((date: Date, locale: string | undefined) => string);

export type DatepickerProps = {
  /** Selected date(s) as `YYYY-MM-DD` strings. Makes the datepicker controlled. */
  value?: string | readonly string[] | undefined;
  defaultValue?: string | readonly string[] | undefined;
  onChange?: ((dates: string[]) => void) | undefined;
  selectionMode?: DatepickerSelectionMode | undefined;
  firstWeekday?: DatepickerWeekDay | undefined;
  displayMonthsCount?: DatepickerMonthsCount | undefined;
  dateMin?: DatepickerDate | undefined;
  dateMax?: DatepickerDate | undefined;
  locale?: string | undefined;
  /** Controls how the selected date(s) are formatted in the trigger. */
  format?: DatepickerFormat | undefined;
  theme?: DatepickerTheme | undefined;
  placement?: DatepickerPlacement | undefined;
  /** Renders the calendar inline instead of in a popup. */
  inline?: boolean | undefined;
  /** Renders a button trigger instead of an input. */
  trigger?: DatepickerTrigger | undefined;
  /** Leading icon of the button trigger. */
  icon?: ReactNode;
  /** Replaces the `.form-control` class of the input with `.form-ghost`. */
  ghost?: boolean | undefined;
  placeholder?: string | undefined;
  id?: string | undefined;
  name?: string | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
  'aria-label'?: string | undefined;
  'aria-labelledby'?: string | undefined;
  'aria-describedby'?: string | undefined;
};

type FormatOptions = {
  format: DatepickerFormat | undefined;
  locale: string;
  selectionMode: DatepickerSelectionMode;
};

const HIDE_DELAY = 100;

function normalizeDates(value: string | readonly string[] | undefined): string[] {
  if (value === undefined) {
    return [];
  }

  return typeof value === 'string' ? [value] : [...value];
}

function formatDates(dates: string[], { format, locale, selectionMode }: FormatOptions): string {
  if (dates.length === 0) {
    return '';
  }

  const localeValue = locale === 'default' ? undefined : locale;
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year ?? 1970, (month ?? 1) - 1, day ?? 1);

    if (typeof format === 'function') {
      return format(date, localeValue);
    }

    if (format) {
      return new Intl.DateTimeFormat(localeValue, format).format(date);
    }

    return date.toLocaleDateString(localeValue);
  };

  if (dates.length === 1) {
    return formatDate(dates[0] as string);
  }

  const separator = selectionMode === 'multiple-ranged' ? ' – ' : ', ';
  return dates.map((date) => formatDate(date)).join(separator);
}

export function Datepicker({
  value,
  defaultValue,
  onChange,
  selectionMode = 'single',
  firstWeekday = 1,
  displayMonthsCount = 1,
  dateMin,
  dateMax,
  locale = 'default',
  format,
  theme = 'auto',
  placement = 'left',
  inline = false,
  trigger = 'input',
  icon,
  ghost = false,
  placeholder = 'Choose date…',
  id,
  name,
  disabled,
  className,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
}: DatepickerProps) {
  const [selectedDates, setSelectedDates] = useState<string[]>(() =>
    normalizeDates(value ?? defaultValue),
  );
  const [open, setOpen] = useState(false);
  const controlRef = useRef<HTMLInputElement | HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<Calendar | undefined>(undefined);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const shownRef = useRef(false);
  const wasOpenRef = useRef(false);
  const selectedRef = useRef<string[]>(selectedDates);
  const onChangeRef = useRef(onChange);
  const formatOptionsRef = useRef<FormatOptions>({ format, locale, selectionMode });
  onChangeRef.current = onChange;
  formatOptionsRef.current = { format, locale, selectionMode };

  const displayValue = formatDates(selectedDates, formatOptionsRef.current);
  const isButton = !inline && trigger === 'button';

  const renderValue = (dates: string[]) => {
    setSelectedDates(dates);

    if (trigger === 'input' && !inline && controlRef.current) {
      controlRef.current.value = formatDates(dates, formatOptionsRef.current);
    }
  };

  useEffect(() => {
    const element = inline ? containerRef.current : controlRef.current;
    if (!element) {
      return;
    }

    const resolveTheme = () => {
      if (theme !== 'auto') {
        return theme;
      }

      return element.closest('[data-bs-theme]')?.getAttribute('data-bs-theme') ?? undefined;
    };

    const syncTheme = (mainElement: HTMLElement | undefined) => {
      if (!mainElement) {
        return;
      }

      const themeValue = resolveTheme();
      if (themeValue) {
        mainElement.setAttribute('data-bs-theme', themeValue);
      } else {
        mainElement.removeAttribute('data-bs-theme');
      }
    };

    const firstDate = selectedRef.current[0];
    const [startYear, startMonth] = firstDate?.split('-').map(Number) ?? [];

    const calendar = new Calendar(element, {
      extensions: [months],
      inputMode: !inline,
      positionToInput: placement,
      firstWeekday,
      locale,
      selectionDatesMode: selectionMode,
      selectedDates: selectedRef.current,
      displayMonthsCount,
      type: displayMonthsCount > 1 ? 'multiple' : 'default',
      selectedTheme: theme === 'auto' ? 'system' : theme,
      themeAttrDetect: '[data-bs-theme]',
      ...(startMonth === undefined ? {} : { selectedMonth: (startMonth - 1) as Range<12> }),
      ...(startYear === undefined ? {} : { selectedYear: startYear }),
      ...(dateMin === undefined ? {} : { dateMin: dateMin as DateAny }),
      ...(dateMax === undefined ? {} : { dateMax: dateMax as DateAny }),
      onClickDate: (self) => {
        const dates = [...self.context.selectedDates];
        selectedRef.current = dates;
        renderValue(dates);
        onChangeRef.current?.(dates);

        if (inline) {
          return;
        }

        const complete =
          (selectionMode === 'single' && dates.length > 0) ||
          (selectionMode === 'multiple-ranged' && dates.length >= 2);

        if (complete) {
          hideTimerRef.current = setTimeout(() => calendarRef.current?.hide(), HIDE_DELAY);
        }
      },
      onInit: (self) => syncTheme(self.context.mainElement),
      onShow: (self) => {
        shownRef.current = true;
        setOpen(true);
        syncTheme(self.context.mainElement);
      },
      onHide: () => {
        shownRef.current = false;
        setOpen(false);
      },
    });

    // Vanilla Calendar Pro hides the popup on pointerdown before the trigger click
    // runs, so the click handler needs to know whether the popup was open before
    // the press. This listener is registered before `init()` and therefore runs
    // ahead of the plugin's own document listener.
    const handlePointerDown = () => {
      wasOpenRef.current = shownRef.current;
    };

    document.addEventListener('pointerdown', handlePointerDown, true);
    calendar.init();
    calendarRef.current = calendar;
    selectedRef.current = normalizeDates(value ?? defaultValue);
    renderValue(selectedRef.current);

    const themeAncestor = element.closest('[data-bs-theme]');
    const observer =
      theme === 'auto' && themeAncestor
        ? new MutationObserver(() => syncTheme(calendar.context.mainElement))
        : undefined;
    observer?.observe(themeAncestor as Element, {
      attributes: true,
      attributeFilter: ['data-bs-theme'],
    });

    return () => {
      if (hideTimerRef.current !== undefined) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = undefined;
      }

      document.removeEventListener('pointerdown', handlePointerDown, true);
      observer?.disconnect();
      calendar.destroy();
      calendarRef.current = undefined;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    inline,
    trigger,
    selectionMode,
    firstWeekday,
    displayMonthsCount,
    dateMin,
    dateMax,
    locale,
    theme,
    placement,
  ]);

  useEffect(() => {
    if (value === undefined) {
      return;
    }

    const dates = normalizeDates(value);
    selectedRef.current = dates;
    calendarRef.current?.set({ selectedDates: dates });
    renderValue(dates);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (inline) {
    return (
      <>
        <div ref={containerRef} className={className} />
        {name && <input type='hidden' name={name} value={selectedDates.join(',')} readOnly />}
      </>
    );
  }

  if (isButton) {
    return (
      <button
        ref={(node) => {
          controlRef.current = node;
        }}
        type='button'
        id={id}
        name={name}
        className={clsx('btn-outline theme-secondary', className)}
        disabled={disabled}
        aria-haspopup='dialog'
        aria-expanded={open}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        onClick={() => {
          const calendar = calendarRef.current;
          if (!calendar) {
            return;
          }

          const wasOpen = wasOpenRef.current || shownRef.current;
          wasOpenRef.current = false;

          if (wasOpen) {
            calendar.hide();
          } else {
            calendar.show();
          }
        }}
      >
        {icon}
        <span className='datepicker-value'>{displayValue || placeholder}</span>
      </button>
    );
  }

  return (
    <input
      ref={(node) => {
        controlRef.current = node;
      }}
      type='text'
      id={id}
      name={name}
      className={clsx(ghost ? 'form-ghost' : 'form-control', className)}
      placeholder={placeholder}
      autoComplete='off'
      disabled={disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    />
  );
}
