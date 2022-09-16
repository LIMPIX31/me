import { linearGradient } from 'polished'

export const theme = {
  back: '#161616',
  front: '#fff8f0',
  primary: (toDirection?: string) =>
    linearGradient({
      colorStops: ['#f16f26', '#884e9c'],
      toDirection,
    }),
  secondary: (toDirection?: string) =>
    linearGradient({
      colorStops: ['#8e41ac', '#f42e2e', '#fac059'],
      toDirection: toDirection ?? '45deg',
    }),
}
