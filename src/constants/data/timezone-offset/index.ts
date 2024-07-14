export const TIMEZONE_OFFSET: { [key: string]: number } = {
  UTC: 0,
  GMT: 0,
  CET: 1 * 60,
  EET: 2 * 60,
  IST: 5.5 * 60,
  CST: 8 * 60,
  JST: 9 * 60,
  AEST: 10 * 60,
  NZST: 12 * 60,
  PST: -7 * 60,
  MST: -6 * 60,
  CST_US: -6 * 60,
  EST: -4 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  CEST: 2 * 60,
  GST: 4 * 60,
  AST: 3 * 60,
  PKT: 5 * 60,
  WAT: 1 * 60,
};

export const LOCALE_OFFSET = -new Date().getTimezoneOffset();
