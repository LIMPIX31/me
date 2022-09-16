import { createGlobalStyle, css } from 'styled-components'
import azonix from '~/assets/fonts/Azonix.otf'
import cartographer_400 from '~/assets/fonts/CartographCF-Regular.ttf'
import cartographer_600 from '~/assets/fonts/CartographCF-Bold.ttf'
import cartographer_300 from '~/assets/fonts/CartographCF-Light.ttf'
import cartographer_900 from '~/assets/fonts/CartographCF-Heavy.ttf'

export const fontFace = (
  name: string,
  src: string,
  variant: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = 400,
) => css`
  @font-face {
    font-family: ${name};
    src: url(${src});
    font-weight: ${variant};
  }
`

export const Fonts = createGlobalStyle`
  ${fontFace('Azonix', azonix)}
  ${fontFace('Cartographer', cartographer_400, 400)}
  ${fontFace('Cartographer', cartographer_600, 600)}
  ${fontFace('Cartographer', cartographer_300, 300)}
  ${fontFace('Cartographer', cartographer_900, 900)}
`
