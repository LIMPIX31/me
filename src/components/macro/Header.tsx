import { FC } from 'react'
import styled from 'styled-components'
import { theme } from 'style/theme'
import { Content } from 'components/micro/Content'

const StyledHeader = styled.header`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 80px;
  backdrop-filter: blur(25px);
  z-index: 100;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.2);

  &:after {
    background: ${theme.secondary('90deg')};
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    mask: linear-gradient(90deg, transparent, white, transparent);
  }
`

const HeaderContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderContent></HeaderContent>
    </StyledHeader>
  )
}
