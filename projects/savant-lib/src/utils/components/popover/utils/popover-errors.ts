/**
 * Throws an exception for the case when popover trigger doesn't have a valid popover instance
 */
export const throwPopoverMissingError = () => {
  throw Error(`savant-lib-popover-trigger: must pass in an savant-lib-popover instance.

    Example:
      <savant-lib-popover #popover="savant-lib-popover"></savant-lib-popover>
      <button [savantLibPopoverTrigger]="popover"></button>`);
};

/**
 * Throws an exception for the case when popover's PopoverPositionX value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 */
export const throwPopoverInvalidPositionX = () => {
  throw Error(`xPosition value must be either 'before', 'center' or after'.
      Example: <savant-lib-popover xPosition="before" #popover="savant-lib-popover"></savant-lib-popover>`);
};

/**
 * Throws an exception for the case when popover's PopoverPositionY value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 */
export const throwPopoverInvalidPositionY = () => {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <savant-lib-popover yPosition="above" #popover="savant-lib-popover"></savant-lib-popover>`);
};
