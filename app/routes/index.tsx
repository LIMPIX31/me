import styled from 'styled-components'
import { DeterminatingText } from '~/components/micro/DeterminatingText'
import { mix, rgba } from 'polished'
import { theme } from '~/style/theme'
import { Content } from '~/components/micro/Content'
import { Age } from '~/components/micro/Age'
import { VerticalBrace } from '~/components/micro/VerticalBrace'
import ts_logo from '~/assets/images/ts-logo-round-256.svg'
import kotlin_logo from '~/assets/images/kotlin_logo.svg'
import rust_logo from '~/assets/images/rust_logo.png'
import back1 from '~/assets/images/back1.svg'

const Page = styled.div`
  width: 100%;
  background: url(${back1}) center 0;
  background-size: 120rem;
  padding-top: 10rem;
`

const Overview = styled.section`
  width: 100%;
  height: 500px;
`

const ShortInfo = styled.div`
  display: inline-grid;
  grid-column-gap: 50px;
  grid-template-areas:
    'photo nickname'
    'photo fullname';
  align-items: center;
  position: relative;
  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Nickname = styled(DeterminatingText)`
  z-index: 1;
  font-size: 7rem;
  font-weight: 600;
  background: ${theme.primary('45deg')};
  grid-area: nickname;
`

const Fullname = styled(DeterminatingText)`
  font-weight: 300;
  font-size: 3rem;
  background-color: ${mix(0.5, theme.front, theme.back)};
  grid-area: fullname;
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

const Photo = styled.img`
  background-color: ${mix(0.01, theme.front, theme.back)};
  height: 11rem;
  width: 11rem;
  border-radius: 24px;
  border: 0;
  outline: 0;
  grid-area: photo;
  z-index: 2;
  margin-top: 2rem;
`

const About = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`

const Title = styled(DeterminatingText)`
  font-size: 3rem;
  position: relative;
  display: inline;

  &:after {
    position: absolute;
    display: block;
    content: '';
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 5px;
    background: ${theme.secondary()};
  }
`

const AboutText = styled(DeterminatingText)`
  max-width: 790px;
  padding: 0 40px;
  font-size: 24px;
  width: 100%;
  text-align: justify;
`

const Experience = styled.section`
  width: 100%;
  height: 9rem;
  position: relative;
  margin-bottom: 5rem;
  background: ${mix(0.05, 'black', theme.back)};
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.2);

  ${Content} {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${theme.secondary('90deg')};
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }
`

const Exp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  mix-width: 13rem;
`

const ExpValue = styled(DeterminatingText)`
  font-weight: 900;
  font-size: 5rem;
  line-height: 5rem;
`

const ExpDesc = styled(DeterminatingText)`
  font-weight: 300;
  opacity: 0.5;
  text-align: center;
`

const MostUsed = styled.section`
  margin-top: 10rem;
  ${Content} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`

const MostUsedGrid = styled.div`
  display: grid;
  grid-template-areas: 't t' 'k r';
  align-items: center;
  max-width: 920px;
  width: 100%;
  grid-gap: 20px;
`

const LanguageUsed = styled.div<{ color: string; garea: string }>`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 50px;
  gap: 40px;
  border-radius: 6px;
  grid-area: ${({ garea }) => garea};
  background-color: ${({ color }) => color};
  box-shadow: 0 0 50px 1px ${({ color }) => rgba(color, 0.3)};
  @media screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    height: 220px;
    padding: 10px 20px;
    img {
      height: 80px;
      width: 80px;
    }
  }
  img {
    height: 100%;
    object-fit: contain;
  }
  span {
    font-weight: 300;
    opacity: 0.7;
    font-size: 1em;
  }
`

export default function Index() {
  return (
    <Page>
      <Overview>
        {/*<OverBlurred>*/}
        {/*  <GlowBlock1 />*/}
        {/*  <GlowBlock2 />*/}
        {/*</OverBlurred>*/}
        <Content>
          <ShortInfo>
            <Photo />
            <Nickname>LIMPIX31</Nickname>
            <Fullname>Danil Karpenko</Fullname>
            <Age />
          </ShortInfo>
          <div />
        </Content>
      </Overview>
      <Experience>
        <Content>
          <Exp>
            <ExpValue>7</ExpValue>
            <ExpDesc>Years in programming</ExpDesc>
          </Exp>
          <Exp>
            <ExpValue>3</ExpValue>
            <ExpDesc>Years in Web dev</ExpDesc>
          </Exp>
          <Exp>
            <ExpValue style={{ backgroundColor: '#f42e2e' }}>0</ExpValue>
            <ExpDesc>Years in commercial development</ExpDesc>
          </Exp>
        </Content>
      </Experience>
      <About>
        <Title>About Me</Title>
        <VerticalBrace />
        <AboutText>
          Hi! I&apos;m Danil! I&apos;m a Fullstack programmer. Born in 2006 in Russia in Belgorod. I
          started my programming journey at 9. And wrote my first JavaScript code at 12.
        </AboutText>
      </About>
      <MostUsed>
        <Content>
          <Title>Most used languages</Title>
          <MostUsedGrid>
            <LanguageUsed garea={'t'} color={'#3178c6'}>
              <img src={ts_logo} alt={'ts'} />
              <DeterminatingText as={'span'}>
                The most used programming language. It&apos;s used for 90% of all my projects. I
                know it very well along with JavaScript.
              </DeterminatingText>
            </LanguageUsed>
            <LanguageUsed garea={'k'} color={'rgba(136,25,255,0.59)'}>
              <img src={kotlin_logo} alt={'kotlin'} />
              <DeterminatingText as={'span'}>
                This language is mainly used for development related to Minecraft.
              </DeterminatingText>
            </LanguageUsed>
            <LanguageUsed garea={'r'} color={'rgba(255,113,25,0.59)'}>
              <img src={rust_logo} alt={'rust'} />
              <DeterminatingText as={'span'}>There is a desire to learn</DeterminatingText>
            </LanguageUsed>
          </MostUsedGrid>
        </Content>
      </MostUsed>
    </Page>
  )
}
