import { FC } from 'react'
import styled from 'styled-components'
import { theme } from 'style/theme'
import { DeterminatingText } from 'components/micro/DeterminatingText'

const Substrate = styled.div`
  height: 2.5rem;
  background: ${theme.secondary('45deg')};
  border-radius: 8px;
  flex-shrink: 0;
  padding: 1px;
  transition: all 0.3s;
  &:hover {
    translate: 0 -5px;
    box-shadow: 0 0 20px 1px rgba(0,0,0,0.2);
  }
`

const Content = styled.button`
  background-color: ${theme.back};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const ButtonText = styled(DeterminatingText)`
  background: ${theme.secondary('45deg')};
  font-weight: 300;
  font-size: 1.1rem;
`

export const Button: FC<JSX.IntrinsicElements['button']> = ({ children, ...props }) => {
  return (
    <Substrate {...(props as object)}>
      <Content>
        <ButtonText>{children}</ButtonText>
      </Content>
    </Substrate>
  )
}
