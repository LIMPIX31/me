import { FC, useMemo } from 'react'
import styled from 'styled-components'
import { theme } from 'style/theme'
import { mix } from 'polished'
import { DeterminatingText } from 'components/micro/DeterminatingText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faMinus,
  faRubleSign,
  faArrowDown,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'components/micro/Button'

export interface Ability {
  name: string
  able: boolean | 'confused'
}

export interface ServiceCardProps {
  name: string
  short: string
  price: number
  old?: number
  abilities: Ability[]
  from?: boolean
}

const ServiceCardStyled = styled.article`
  width: 300px;
  background: ${theme.secondary()};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
`

const Content = styled.div`
  width: 100%;
  background-color: ${theme.back};
  border-radius: 16px;
  transition: background-color, 0.3s;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:hover {
    background-color: ${mix(0.97, theme.back, theme.front)};
  }
`

const Title = styled(DeterminatingText)`
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
`

const Short = styled(DeterminatingText)`
  font-weight: 300;
  font-size: 0.7rem;
  background-color: ${mix(0.4, theme.front, theme.back)};
  text-align: center;
`

const AbilitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Ability = styled.li`
  display: flex;
  align-items: center;
  &:before {
    content: '';
  }
`

const AbilityStatus = styled.span<{ able: boolean | 'confused' }>`
  color: ${({ able }) =>
    able === 'confused'
      ? '#ffdc58'
      : able === true
      ? '#c0ff65'
      : mix(0.4, theme.front, theme.back)};
  width: 1.6rem;
`

const AbilityText = styled(DeterminatingText)`
  flex-grow: 1;
`

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  width: 100%;
`

const PriceValue = styled(DeterminatingText)`
  display: inline-block;
  text-align: center;
`

const PriceValueWrapper = styled.span<{ profit: boolean }>`
  font-weight: 900;
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
  position: relative;
  color: ${({ profit }) => (profit ? '#c0ff65' : theme.front)};
  svg {
    font-size: 2rem;
    padding-left: 0.5rem;
  }

  ${PriceValue} {
    background-color: ${({ profit }) => (profit ? '#c0ff65' : theme.front)};
  }
`

const Profit = styled.span`
  font-size: 2rem;
  position: absolute;
  top: 55%;
  left: -3rem;
  translate: 0 -50%;
  line-height: 2rem;
`

const OldPrice = styled(DeterminatingText)`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 300;
  font-size: 1.2rem;
  translate: -50% -50%;
  background-color: ${mix(0.4, theme.front, theme.back)};
  text-decoration: line-through;
  text-decoration-color: #ff4b7b;
`

export const ServiceCard: FC<ServiceCardProps> = ({
  abilities,
  short,
  price,
  name,
  old = price,
  from = false,
}) => {
  const isProfit = useMemo(() => old > price, [name, old])

  return (
    <ServiceCardStyled>
      <Content>
        <Title>{name}</Title>
        <Short>{short}</Short>
        <AbilitiesList>
          {abilities.map(v => (
            <Ability key={v.name}>
              <AbilityStatus able={v.able}>
                {v.able === 'confused' ? (
                  <FontAwesomeIcon icon={faQuestion} />
                ) : v.able ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faMinus} />
                )}
              </AbilityStatus>
              <AbilityText>{v.name}</AbilityText>
            </Ability>
          ))}
        </AbilitiesList>
        <Price>
          <PriceValueWrapper profit={isProfit}>
            <PriceValue>
              {price}
              {from ? '+' : ''}
            </PriceValue>
            <FontAwesomeIcon icon={faRubleSign} />
            {old && isProfit && <OldPrice>{old}</OldPrice>}
          </PriceValueWrapper>
        </Price>
        <Button>Подробнее</Button>
      </Content>
    </ServiceCardStyled>
  )
}
