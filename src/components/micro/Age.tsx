import styled from 'styled-components'
import { theme } from 'style/theme'
import { FC, useEffect, useState } from 'react'
import { Styled } from 'utils/props'
import { increment } from 'utils'

const AgeStyled = styled.div`
  position: absolute;
  top: 40%;
  left: 0%;
  translate: 0 -50%;
  font-weight: 900;
  font-family: 'JetBrains Mono', sans-serif;
  background: ${theme.front};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30rem;
  line-height: 40rem;
  opacity: 0.1;
  user-select: none;
  z-index: -1;
  @media screen and (max-width: 960px) {
    left: 50%;
    top: 100%;
    translate: -50% -50%;
  }
`

const birthDate = new Date('2006-06-01').getFullYear()
const now = new Date().getFullYear()
const age = now - birthDate

export const Age: FC<Styled> = ({ className }) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (counter < age) setTimeout(() => setCounter(increment), 100 / (counter / 10))
  }, [counter])

  return <AgeStyled className={className}>{counter}</AgeStyled>
}
