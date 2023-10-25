export enum Palette {
  amber = 'amber',
  plain = 'plain',
}

export const colorMap = [
  { value: 0, color: [177,232,146], hex: '#c8e1bd' },
  { value: 0.1, color: [101,207,182], hex: '#abd7c9' },
  { value: 0.2, color: [56,194,210], hex: '#b0dce3' },
  { value: 0.3, color: [29,145,192], hex: '#91b8d0' },
  { value: 0.4, color: [107,72,219], hex: '#b8ace5' },
  { value: 0.5, color: [166,37,232], hex: '#caabde' },
  { value: 0.6, color: [226,27,136], hex: '#f6badb' },
  { value: 0.7, color: [196,0,0], hex: '#efbebe' },
  { value: 0.8, color: [253,128,0], hex: '#ffdcb7' },
  { value: 0.9, color: [255,200,0], hex: '#f8e4b5' },
  { value: 1, color: [241,241,127], hex: '#f3f3cd' },
];
export const amberHeatMap = [
  { value: -1, color: [231,1,116,100], hex: '#f187b7' },
  { value: 0, color: [255,215,64,100], hex: '#fdf1b7' },
  { value: 0.25, color: [255,184,44,100], hex: '#ffdb9c' },
  { value: 0.5, color: [254,147,21,100], hex: '#fac790' },
  { value: 0.75, color: [220,91,26,100], hex: '#f8ae86' },
  { value: 1, color: [184,31,31,100], hex: '#ff957d' },
];
export const deepAmber = '#ba50d0';
export const deepPlain = '#866bde';

export const colorPaletteMap = {
  [Palette.amber]: amberHeatMap,
  [Palette.plain]: colorMap,
};
export const colorDeepMap = {
  [Palette.amber]: deepAmber,
  [Palette.plain]: deepPlain,
};

export const hexToRgb = (hex: string): number[] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : [0, 0, 0];
}

export const getColor = (weight: number, alfa = 1, paletteName: keyof typeof Palette = 'amber'): string => {
  let colorRange = [0, 0];
  const selectedColorMap = colorPaletteMap[paletteName];
  for (const [index, step] of selectedColorMap.entries()) {
    if (weight <= step.value) {
      if (index === 0) {
        break;
      }
      colorRange = [index - 1, index];
      break;
    }
  }
  const color1 = selectedColorMap[colorRange[0]];
  const color2 = selectedColorMap[colorRange[1]];
  const colors1 = hexToRgb(color1.hex);
  const colors2 = hexToRgb(color2.hex);
  const w2 = (color2.value - color1.value) ? (weight - color1.value) / (color2.value - color1.value) : 0;
  const w1 = 1 - w2;

  const rgb = [
    Math.round(colors1[0] * w1 + colors2[0] * w2),
    Math.round(colors1[1] * w1 + colors2[1] * w2),
    Math.round(colors1[2] * w1 + colors2[2] * w2),
  ];
  return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alfa})`;
};
