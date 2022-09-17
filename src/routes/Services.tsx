import { FC } from 'react'
import styled from 'styled-components'
import { Content } from 'components/micro/Content'
import { ServiceCard } from 'components/macro/ServiceCard'

const Page = styled.div`
  padding-top: 10rem;
`

const Tariffs = styled.section`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Services: FC = () => {
  return (
    <Page>
      <Content>
        <Tariffs>
          <ServiceCard
            name={'Быстрый'}
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
                able: false,
              },
              {
                name: 'Поддержка',
                able: false,
              },
              {
                name: 'Бесплатный хостинг',
                able: false,
              },
            ]}
          />
        </Tariffs>
      </Content>
    </Page>
  )
}
