import styled from 'styled-components'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { As, HasChildren, Styled } from '~/utils/props'
import { useIntersection } from 'react-use'
import { chance, increment, randomItem } from '~/utils'
import { theme } from '~/style/theme'

const deterholders = '!@#$%^&*()-=+~\\|/?:{}[]'

export const StyledText = styled.div`
  font-family: Cartographer, sans-serif;
  background: ${theme.front};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export interface DeterminatingTextProps extends Required<HasChildren<string>>, As, Styled {
  gradient?: boolean
}

export const DeterminatingText: FC<DeterminatingTextProps> = ({ children, gradient, as, className }) => {
  const [level, setLevel] = useState(0)
  const determiantion = useMemo(
    () =>
      children
        .split('')
        .map(v =>
          chance(level / 20) ? v : chance(0.5) ? v.toUpperCase() : randomItem(deterholders),
        )
        .join(''),
    [level],
  )

  const iRef = useRef(null)
  const iRaw = useIntersection(iRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  const [inView, setInView] = useState(false)

  useEffect(() => {
    const value = !!(iRaw && iRaw.intersectionRatio >= 1)
    if (value !== inView) setInView(value)
  }, [iRaw])

  useEffect(() => {
    if (level < 20 && inView) setTimeout(() => setLevel(increment), 10)
  }, [level, inView])

  return (
    <StyledText as={as} ref={iRef} className={className}>
      {determiantion}
    </StyledText>
  )
}
