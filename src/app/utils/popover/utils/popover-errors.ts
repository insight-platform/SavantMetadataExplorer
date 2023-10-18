/**
 * Throws an exception for the case when popover trigger doesn't have a valid mi-popover instance
 */
export const throwMiPopoverMissingError = () => {
  throw Error(`mi-popover-trigger: must pass in an mi-popover instance.

    Example:
      <mi-popover #popover="miPopover"></mi-popover>
      <button [miPopoverTrigger]="popover"></button>`);
};

/**
 * Throws an exception for the case when popover's miPopoverPositionX value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 */
export const throwMiPopoverInvalidPositionX = () => {
  throw Error(`xPosition value must be either 'before', 'center' or after'.
      Example: <mi-popover xPosition="before" #popover="miPopover"></mi-popover>`);
};

/**
 * Throws an exception for the case when popover's miPopoverPositionY value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 */
export const throwMiPopoverInvalidPositionY = () => {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mi-popover yPosition="above" #popover="miPopover"></mi-popover>`);
};
