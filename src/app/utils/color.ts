export enum Palette {
  amber = 'amber',
  heatMap = 'heatMap',
  plain = 'plain',
}

export const colorMap = [
  { value: 0, color: [177,232,146], hex: '#b1e892' },
  { value: 0.1, color: [101,207,182], hex: '#65cfb6' },
  { value: 0.2, color: [56,194,210], hex: '#38c2d2' },
  { value: 0.3, color: [29,145,192], hex: '#1d91c0' },
  { value: 0.4, color: [107,72,219], hex: '#6b48db' },
  { value: 0.5, color: [166,37,232], hex: '#a625e8' },
  { value: 0.6, color: [226,27,136], hex: '#e21b88' },
  { value: 0.7, color: [196,0,0], hex: '#c40000' },
  { value: 0.8, color: [253,128,0], hex: '#fd8000' },
  { value: 0.9, color: [255,200,0], hex: '#ffc800' },
  { value: 1, color: [241,241,127], hex: '#f1f17f' },
];

export const colorHeatMap = [
  { value: 0, color: [0,0,101,1], hex: '#000065' },
  { value: 0.1, color: [0,0,131,1], hex: '#000083' },
  { value: 0.2, color: [0,60,170,1], hex: '#003caa' },
  { value: 0.3, color: [3,158,213,1], hex: '#039ed5' },
  { value: 0.4, color: [5,255,255,1], hex: '#05ffff' },
  { value: 0.5, color: [88,255,170,1], hex: '#58ffaa' },
  { value: 0.6, color: [172,255,85,1], hex: '#acff55' },
  { value: 0.7, color: [255,255,0,1], hex: '#ffff00' },
  { value: 0.8, color: [253,128,0,1], hex: '#fd8000' },
  { value: 0.9, color: [250,0,0,1], hex: '#fa0000' },
  { value: 1, color: [128,0,0,1], hex: '#800000' },
];

export const amberHeatMap = [
  { value: -1, color: [231,1,116,100], hex: '#f187b7' },
  { value: 0, color: [255,215,64,100], hex: '#fdf1b7' },
  { value: 0.25, color: [255,184,44,100], hex: '#ffdb9c' },
  { value: 0.5, color: [254,147,21,100], hex: '#fac790' },
  { value: 0.75, color: [220,91,26,100], hex: '#f8ae86' },
  { value: 1, color: [184,31,31,100], hex: '#ff957d' },
];
export const deepPurple = '#673ab7';

export const colorPaletteMap = {
  [Palette.amber]: amberHeatMap,
  [Palette.heatMap]: colorHeatMap,
  [Palette.plain]: colorMap,
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
