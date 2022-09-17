import styled from 'styled-components'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { As, HasChildren, Styled } from 'utils/props'
import { useIntersection } from 'react-use'
import { chance, increment, randomItem } from 'utils'
import { theme } from 'style/theme'
import { useIsServer } from 'hooks/useIsServer'

const deterholders = '!@#$%^&*()-=+~\\|/?:{}[]'

export const StyledText = styled.div`
  font-family: Cartographer, sans-serif;
  background: ${theme.front};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export interface DeterminatingTextProps extends Required<HasChildren>, As, Styled {
  gradient?: boolean
}

export const DeterminatingText: FC<DeterminatingTextProps> = ({
  children,
  style,
  as,
  className,
}) => {
  const isServer = useIsServer()

  const value = String(Array.isArray(children) ? children.join('') : children)

  const [level, setLevel] = useState(0)
  const determiantion = useMemo(
    () =>
      value
        ?.split?.('')
        ?.map?.((v: any) =>
          v !== ' '
            ? chance(level / 20)
              ? v
              : chance(0.7)
              ? v.toUpperCase()
              : randomItem(deterholders)
            : v,
        )
        ?.join?.(''),
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
    const value = !!(iRaw && iRaw.isIntersecting)
    if (value !== inView) setInView(value)
  }, [iRaw])

  useEffect(() => {
    if (level < 20 && inView && !isServer) setTimeout(() => setLevel(increment), 30)
  }, [level, inView])

  return (
    <StyledText ref={iRef} className={className} style={style} as={as}>
      {isServer || level === 20 || children === '' ? children : determiantion}
    </StyledText>
  )
}
