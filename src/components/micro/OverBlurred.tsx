import styled from 'styled-components'
import { FC } from 'react'

export const OverBlur = styled.div`
  filter: blur(500px);
`

export const OverBlurred: FC<JSX.IntrinsicElements['div']> = ({ children, ...props }) => (
  <OverBlur {...(props as object)}>
    <OverBlur>
      <OverBlur>{children}</OverBlur>
    </OverBlur>
  </OverBlur>
)
