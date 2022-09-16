import styled from 'styled-components'
import { theme } from '~/style/theme'
import { FC, useEffect, useState } from 'react'
import { Styled } from '~/utils/props'
import { increment } from '~/utils'

const AgeStyled = styled.div`
  position: absolute;
  top: 40%;
  left: 0%;
  translate: 0 -50%;
  font-weight: 900;
  font-family: Cartographer, sans-serif;
  background: ${theme.secondary('45deg')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30rem;
  line-height: 40rem;
  opacity: 0.2;
  user-select: none;
`

const birthDate = new Date('2006-06-01').getFullYear()
const now = new Date().getFullYear()
const age = now - birthDate

export const Age: FC<Styled> = ({ className }) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (counter < age) setTimeout(() => setCounter(increment), 100 / (counter / 10))
  }, [counter])

  return <AgeStyled>{counter}</AgeStyled>
}
