import { linearGradient } from 'polished'

export const theme = {
  back: '#161616',
  front: '#fff8f0',
  primary: (toDirection?: string) =>
    linearGradient({
      colorStops: ['#5926f1', '#00ffa6'],
      toDirection,
    }),
  secondary: (toDirection?: string) =>
    linearGradient({
      colorStops: ['#5926f1', '#00ffa6'],
      toDirection: toDirection ?? '45deg',
    }),
  size: {
    font: {
      xs: '0.5rem',
      s: '0.6875rem',
      m: '1rem',
      l: '1.375rem',
      xl: '1.625rem',
      xxl: '2rem',
      xxxl: '3rem',
    },
  },
}
