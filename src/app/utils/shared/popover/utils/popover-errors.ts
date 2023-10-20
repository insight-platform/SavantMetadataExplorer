/**
 * Throws an exception for the case when popover trigger doesn't have a valid popover instance
 */
export const throwPopoverMissingError = () => {
  throw Error(`sf-popover-trigger: must pass in an sf-popover instance.

    Example:
      <sf-popover #popover="sf-popover"></sf-popover>
      <button [sfPopoverTrigger]="popover"></button>`);
};

/**
 * Throws an exception for the case when popover's PopoverPositionX value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 */
export const throwPopoverInvalidPositionX = () => {
  throw Error(`xPosition value must be either 'before', 'center' or after'.
      Example: <sf-popover xPosition="before" #popover="sf-popover"></sf-popover>`);
};

/**
 * Throws an exception for the case when popover's PopoverPositionY value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 */
export const throwPopoverInvalidPositionY = () => {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <sf-popover yPosition="above" #popover="sf-popover"></sf-popover>`);
};
