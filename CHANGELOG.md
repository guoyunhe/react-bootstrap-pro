# Changelog

## [Unreleased]

### Breaking Changes

- Replace `FormControl` input, select, and textarea usage with dedicated
  `Input`, `Select`, and `Textarea` components. `FormControl` now defaults to
  a `div` and is intended for control wrappers.
- Rename the Box `display` prop to `d`; the old prop is removed.
- Replace Carousel's `fade` and `slide` boolean props with an `effect` prop
  accepting `'slide'` or `'fade'`; the default is `'slide'`.
- Generate Carousel ids internally by default and connect nested controls
  automatically; remove the controls' public `target` props.
- Replace the Combobox `groups` prop with group entries inside `options`.
- Rename the `Datepicker` component and its public types to `DatePicker` and
  `DatePicker*`; remove the old exports.

### Added

- Add `FormAdornIcon` for icons in adorned form controls.
- Add `FormAdornText` for text in adorned form controls.
- Add `FormControl` support for adorned control wrappers.
- Add the `AlertLink` component for links styled within alerts.
- Add the Carousel `ends` prop for configuring end-of-carousel behavior.
- Add the CarouselItem `interval` prop for configuring individual slide durations.
- Add the Carousel `autoplay` prop for starting automatic cycling on page load.
- Add the Carousel `colorMode` prop for configuring Bootstrap's `data-bs-theme` color mode.
- Add the Carousel `itemsGap` prop for configuring spacing between slides.
- Add the Carousel `itemsPeek` prop for revealing neighboring slides.
- Add the Carousel `items` prop for setting the number of visible slides.
- Add the `CarouselPlayPause` component for autoplay pause and resume controls.
- Add the Checkbox `indeterminate` prop for setting its mixed state.
- Add the CSS Grid `gridGap` prop for setting `--bs-gap`.
- Add the DatePicker `w` prop for setting trigger and inline calendar width.

## [0.3.0] - 2026-11-04

### Breaking Changes

- Replace Box `margin*` and `padding*` props with shorthand props; the long names are removed.

### Added

- Add responsive placement support and expanded demos for Tooltip.
- Add Floating UI React documentation to the Tooltip reference.

### Changed

- Align Box spacing props with Bootstrap utility shorthand names.

### Fixed

- Correct Tooltip arrow positioning.

## [0.2.0] - 2026-11-04

### Added

- Add `IconButton` for square icon-only buttons.
- Use `IconButton` for carousel controls.

## [0.1.0] - 2026-11-04

### Added

- Layout: `Box`, `Container`, `Grid` (`Row`, `Col`), `Stack`, and
  `StackContainer`.
- Actions and navigation: `Button`, `ButtonGroup`, `ButtonToolbar`, `IconLink`,
  `Breadcrumb`, `Menu`, `Nav`, `NavOverflow`, `Navbar`, `Pagination`, `Stepper`,
  `Tab`, and `Toggler`.
- Forms: `Form`, `FormControl`, `FormFeedback`, `FormField`, `FormFloating`,
  `FormLabel`, `FormText`, `Checkbox`, `Radio`, `Switch`, `Range`,
  `InputGroup`, `Chip`, `ChipInput`, `Combobox`, `DatePicker`, `OtpInput`, and
  `PasswordStrength`.
- Content and data display: `Accordion`, `Alert`, `Avatar`, `Badge`, `Card`,
  `Carousel`, `Image`, `Figure`, `Typography`, `Prose`, `NotProse`, `ListGroup`,
  `Placeholder`, and `Table`.
- Feedback and overlays: `CloseButton`, `Collapse`, `Dialog`, `Drawer`,
  `Popover`, `Progress`, `Scrollspy`, `Spinner`, `Toast`, and `Tooltip`.
