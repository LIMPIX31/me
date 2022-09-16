import styled from 'styled-components'
import { DeterminatingText } from '~/components/micro/DeterminatingText'
import { mix } from 'polished'
import { theme } from '~/style/theme'
import { Content } from '~/components/micro/Content'
import { OverBlurred } from '~/components/micro/OverBlurred'
import { Age } from '~/components/micro/Age'

const Overview = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 10rem;
`

const ShortInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Me = styled(DeterminatingText)`
  z-index: 1;
  font-size: 7rem;
  font-weight: 600;
  background: ${theme.primary('45deg')};
`

const MoreMe = styled(DeterminatingText)`
  font-weight: 300;
  font-size: 3rem;
  background-color: ${mix(0.5, theme.front, theme.back)};
`

const GlowBlock = styled.div`
  position: absolute;
  width: 100rem;
  height: 40rem;
  border-radius: 0;
  z-index: -1;
  opacity: 0.2;
`

const GlowBlock1 = styled(GlowBlock)`
  translate: 50rem;
  background: ${theme.secondary()};
`

const GlowBlock2 = styled(GlowBlock)`
  translate: 0rem -10rem;
  background: ${theme.primary()};
  width: 200px;
  height: 200px;
  opacity: 1;
`

export default function Index() {
  return (
    <Overview>
      {/*<OverBlurred>*/}
      {/*  <GlowBlock1 />*/}
      {/*  <GlowBlock2 />*/}
      {/*</OverBlurred>*/}
      <Content>
        <ShortInfo>
          <Me>LIMPIX31</Me>
          <MoreMe>Danil Karpenko</MoreMe>
          <Age />
        </ShortInfo>
        <div />
      </Content>
    </Overview>
  )
}
