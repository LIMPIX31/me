import { FC } from 'react'
import styled from 'styled-components'
import { theme } from 'style/theme'
import { Content } from 'components/micro/Content'
import { BezierArrow } from 'svg/BezierArrow'
import { NavLink } from 'react-router-dom'
import { mix, rgb, rgba } from 'polished'

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
  gap: 5rem;
  height: 100%;
`

const Logo = styled.img`
  height: 80%;
`

const Arrow = styled(BezierArrow)`
  height: 80%;
  g {
    stroke: ${theme.primary()};
  }
`

const Nav = styled.nav`
  display: flex;
  align-self: stretch;
`

const NavItem = styled(NavLink)`
  height: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-family: Cartographer, sans-serif;
  font-weight: 300;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: ${theme.front};
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    translate: -50%;
    bottom: 1.1rem;
    display: block;
    width: 100%;
    height: 1px;
    mask: linear-gradient(90deg, transparent, white, transparent);
  }

  &.active {
    background: ${theme.primary('45deg')};
    &:after {
      background: ${theme.secondary('45deg')};
    }
  }
`

export const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <Logo src={'/favicon.png'} />
        <Arrow />
        <Nav>
          <NavItem to={'/cv'}>CV</NavItem>
          <NavItem to={'/services'}>Услуги</NavItem>
        </Nav>
      </HeaderContent>
    </StyledHeader>
  )
}
