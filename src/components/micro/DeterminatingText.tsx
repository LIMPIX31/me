import styled, { css } from 'styled-components'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { As, HasChildren, Styled } from 'utils/props'
import { useIntersection } from 'react-use'
import { chance, increment, randomItem } from 'utils'
import { theme } from 'style/theme'
import { useIsServer } from 'hooks/useIsServer'
import { ellipsis, mix } from 'polished'

const deterholders = '!@#$%^&*()-=+~/?{}[]'

export interface DeterminatingTextProps extends Required<HasChildren>, As, Styled {
  block?: boolean
  center?: boolean
  right?: boolean
  selectable?: boolean
  lineHeight?: string | 'small' | 'medium' | 'high'
  weight?: boolean | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  max?: string | number
  pre?: boolean
  size?: string | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'
  shade?: number | 'low' | 'medium' | 'high'
}

const blockStyle = css`
  display: block;
`

const centerStyle = css`
  text-align: center;
`

const rightStyle = css`
  text-align: right;
`

const selectableStyle = (selectable?: boolean) => css`
  user-select: ${selectable ? 'auto' : 'none'};
`

const boldStyle = (bold?: boolean | number) => css`
  font-weight: ${bold ? (typeof bold === 'number' ? bold : 'bold') : 'normal'};
`

const maxStyle = (max?: number | string) => css`
  ${ellipsis(max)}
`

const preStyle = css`
  white-space: pre-wrap;
`

const sizeStyle = (size: string) => css`
  font-size: ${size};
`

const shade = (level?: number | 'low' | 'medium' | 'high') =>
  level
    ? css`
        background-color: ${mix(
          typeof level === 'string'
            ? level === 'high'
              ? 0.5
              : level === 'medium'
              ? 0.3
              : 0.1
            : level,
          theme.back,
          theme.front,
        )};
      `
    : ''

export const StyledText = styled.div<DeterminatingTextProps>`
  font-family: Cartographer, sans-serif;
  background: ${theme.front};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${props => css`
    ${props.block && blockStyle}
    ${props.center && centerStyle}
    ${props.right && rightStyle}
    ${selectableStyle(props.selectable)}
    ${props.weight && boldStyle(props.weight)}
    ${props.max && maxStyle(props.max)}
    ${props.shade && shade(props.shade)}
    ${props.pre && preStyle}
    ${props.size
      ? sizeStyle(theme.size.font[props.size as keyof typeof theme.size.font] ?? props.size)
      : ''}
  `}
`

export const DeterminatingText: FC<DeterminatingTextProps> = ({
  children,
  style,
  as,
  className,
  ...props
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
    <StyledText ref={iRef} className={className} style={style} as={as} {...props}>
      {isServer || level === 20 || children === '' ? children : determiantion}
    </StyledText>
  )
}
