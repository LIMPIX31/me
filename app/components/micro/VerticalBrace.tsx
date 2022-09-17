import styled from 'styled-components'
import { FC } from 'react'
import { mix } from 'polished'
import { theme } from '~/style/theme'

export const SVG = styled.svg`
  max-width: 834px;
  min-width: 320px;
  padding: 0 20px;
  margin: 0 auto;
  g {
    stroke: ${mix(0.1, theme.front, theme.back)};
  }
`

export const VerticalBrace: FC = () => (
  <SVG viewBox="0 0 220.662 17.463" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g
      fill="none"
      strokeWidth=".195"
      strokeOpacity="1"
      id="g6"
      transform="matrix(2.9661422,0,0,2.889391,1.44726,0.00656434)">
      <path
        d="m 66.14,150.978 c 1.014,-1.764 4.799,-1.584 6.276,-1.596 30.374,-0.239 30.413,-1.367 30.389,-4.238"
        transform="matrix(1.00074,0,0,0.98924,-66.104,-143.582)"
        id="path2"
      />
      <path
        d="m 139.47,150.978 c -1.014,-1.764 -4.8,-1.585 -6.276,-1.596 -30.375,-0.239 -30.413,-1.367 -30.39,-4.238"
        transform="matrix(1.00074,0,0,0.98924,-66.104,-143.582)"
        id="path4"
      />
    </g>
  </SVG>
)
