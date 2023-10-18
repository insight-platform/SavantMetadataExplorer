export const secConverter = (number: number, unit: string | null = null) => {
  let d;
  let h;
  let m;
  let s;
  let ms;
  let fullMcs;

  if (isNaN(number)) {
    throw new TypeError('Value sent to seconds-converter must be a number.');
  }

  if (unit === 'sec' || unit === 'seconds') {
    s = number;
  } else if (unit === 'ms' || unit === 'milliseconds' || !unit) {
    s = Math.floor(number / 1000);
    ms = number % 1000;
  } else if (unit === 'mcs' || unit === 'microseconds' || !unit) {
    s = Math.floor(number / 1000000);
    ms = Math.floor((number % 1000000) / 1000);
    fullMcs = number -  s * 1000000;

  } else {
    throw new TypeError('Unit must be sec or ms or mcs');
  }

  /// 60s -> 60 000 ms -> 60 000 000 mcs
  /*
  56 590 454 mcs
  56 s 590 ms 454 mcs
   */

  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  // eslint-disable-next-line prefer-const
  d = Math.floor(h / 24);
  h = h % 24;

  const nulls = new Array(6 - (fullMcs + '').length).fill(0);
  const secondString = s + '.' + nulls.join('') + fullMcs;
  return {days: d, hours: h, minutes: m, seconds: secondString, };
};

export const units = [
  'days', 'hours', 'minutes', 's', 'ms', 'mcs'
]

export const translateMicroSecondsToTimeString = (time: number) => {
  const res = Object.values(secConverter(time, 'mcs'))
    .reduce<string>((str: string, value: number, index: number) => {
      if (value) {
        str = str + value + '' + units[index] + ' ';
      }
      return str;
    }, '').trim();
  return res || '0' + units[2];
};
