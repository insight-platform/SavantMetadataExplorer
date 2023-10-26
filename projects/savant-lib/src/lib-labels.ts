import { InjectionToken } from '@angular/core';

export enum LibLabels {
  frame = 'frame',
  compareFrames = 'compareFrames',
  frameDetails = 'frameDetails',
  object = 'object',
  compareObject = 'compareObject',
  objectDetails = 'objectDetails',
  label = 'label',
  namespace = 'namespace',
  namespaceLabel = 'namespaceLabel',
  id = 'id',
  processId = 'processId',
  startTime = 'startTime',
  spanId = 'spanId',
}

export enum AttributeLabels {
  title = 'title',
  name = 'name',
  hint = 'hint',
  isPersistent = 'isPersistent',
  values = 'values',
  index = 'index',
  confidence = 'confidence',
  value = 'value',
  field = 'field',
}

export enum LogLabels {
  logLevel = 'logLevel',
  info = 'info',
  trace = 'trace',
  warning = 'warning',
  error = 'error',
  debug = 'debug',
  target = 'target',
  search = 'search',
  fromStart = 'fromStart',
  fromPrevious = 'fromPrevious',
}

export enum Tooltips {
  close = 'close',
  showFrame = 'showFrame',
  compareFrame = 'compareFrame',
  showDataAsTable = 'showDataAsTable',
  showDataAsJson = 'showDataAsJson',
  copyDataAsJson = 'copyDataAsJson',
}

export const defaultLibLabels: Record<LibLabels, string> = {
  [LibLabels.frame]: 'Frame',
  [LibLabels.compareFrames]: 'Compare Frames',
  [LibLabels.frameDetails]: 'Frame Details',
  [LibLabels.object]: 'Object',
  [LibLabels.compareObject]: 'Compare Objects',
  [LibLabels.objectDetails]: 'Object Details',
  [LibLabels.label]: 'Label',
  [LibLabels.namespace]: 'Namespace',
  [LibLabels.namespaceLabel]: 'Namespace & Label',
  [LibLabels.id]: 'Id',
  [LibLabels.processId]: 'Process Id',
  [LibLabels.startTime]: 'Start Time',
  [LibLabels.spanId]: 'Span Id',
}

export const defaultAttributeLabels: Record<AttributeLabels, string> = {
  [AttributeLabels.title]: 'Attributes',
  [AttributeLabels.name]: 'Name',
  [AttributeLabels.hint]: 'Hint',
  [AttributeLabels.isPersistent]: 'Is Persistent',
  [AttributeLabels.values]: 'Values',
  [AttributeLabels.index]: 'Index',
  [AttributeLabels.confidence]: 'Confidence',
  [AttributeLabels.value]: 'Value',
  [AttributeLabels.field]: 'Field',
}

export const defaultLogLabels:  Record<LogLabels, string> = {
  [LogLabels.logLevel]: 'Log Level',
  [LogLabels.info]: 'Info',
  [LogLabels.trace]: 'Trace',
  [LogLabels.warning]: 'Warning',
  [LogLabels.error]: 'Error',
  [LogLabels.debug]: 'Debug',
  [LogLabels.target]: 'Target',
  [LogLabels.search]: 'Search',
  [LogLabels.fromStart]: 'From Start',
  [LogLabels.fromPrevious]: 'From Previous',
}

export const defaultTooltips: Record<Tooltips, string> = {
  [Tooltips.close]: 'Close',
  [Tooltips.showFrame]: 'Show Frame',
  [Tooltips.compareFrame]: 'Compare with selected Frame',
  [Tooltips.showDataAsTable]: 'Show data as Table',
  [Tooltips.showDataAsJson]: 'Show data as JSON',
  [Tooltips.copyDataAsJson]: 'Copy data as JSON',
}

export const LIB_LABELS = new InjectionToken<Record<LibLabels, string>>('LIB_LABELS');
export const ATTRIBUTE_LABELS = new InjectionToken<Record<AttributeLabels, string>>('ATTRIBUTE_LABELS');
export const LOG_LABELS = new InjectionToken<Record<LogLabels, string>>('LOG_LABELS');
export const TOOLTIP_LABELS = new InjectionToken<Record<Tooltips, string>>('TOOLTIP_LABELS');
