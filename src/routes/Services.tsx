import { FC } from 'react'
import styled from 'styled-components'
import { Content } from 'components/micro/Content'
import { ServiceCard } from 'components/macro/ServiceCard'
import { DeterminatingText } from 'components/micro/DeterminatingText'

const Page = styled.div`
  padding-top: 10rem;
`

const Tariffs = styled.section`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 0;
`

export const Services: FC = () => {
  return (
    <Page>
      <Content>
        <Tariffs>
          <ServiceCard
            name={'Quantum'}
            short={'Разработка не более 3-x дней. Единоразовая работа'}
            price={400}
            old={500}
            abilities={[
              {
                name: 'Быстрая разработка',
                able: true,
              },
              {
                name: 'Фиксированная цена',
                able: true,
              },
              {
                name: 'Исходный код',
                able: true,
              },
              {
                name: 'Поддержка 24/7',
                able: false,
              },
              {
                name: 'Бесплатный хостинг*',
                able: false,
              },
            ]}
          />
          <ServiceCard
            name={'Feather'}
            short={
              'Быстрая разработка, не более недели. Длительная разработка не более 24 часов в месяц'
            }
            price={1099}
            abilities={[
              {
                name: 'Быстрая разработка',
                able: true,
              },
              {
                name: 'Фиксированная цена',
                able: false,
              },
              {
                name: 'Исходный код',
                able: true,
              },
              {
                name: 'Поддержка 24/7',
                able: true,
              },
              {
                name: 'Бесплатный хостинг*',
                able: true,
              },
            ]}
          />
          <ServiceCard
            name={'Atom'}
            short={'Разработка спринтами. Желательно наличие макета и плана'}
            price={7000}
            abilities={[
              {
                name: 'Быстрая разработка',
                able: false,
              },
              {
                name: 'Фиксированная цена',
                able: false,
              },
              {
                name: 'Исходный код',
                able: true,
              },
              {
                name: 'Поддержка',
                able: true,
              },
              {
                name: 'Бесплатный хостинг*',
                able: false,
              },
            ]}
          />
        </Tariffs>
        <DeterminatingText size={'s'} shade={'high'}>
          * Бесплатный хостинг - входит в некоторые из тарифов. Предоставляет бесплатное размещение
          web-приложения ТОЛЬКО при наличии собственного доменного имени и доступа к нему. Гарантия
          работы web-приложения на бесплатном хостинге - не более 6 месяцев.
        </DeterminatingText>
      </Content>
    </Page>
  )
}
