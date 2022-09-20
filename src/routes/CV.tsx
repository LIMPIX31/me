import styled from 'styled-components'
import { DeterminatingText } from 'components/micro/DeterminatingText'
import { mix, rgba } from 'polished'
import { theme } from 'style/theme'
import { Content } from 'components/micro/Content'
import { Age } from 'components/micro/Age'
import { VerticalBrace } from 'components/micro/VerticalBrace'
import ts_logo from 'assets/images/ts-logo-round-256.svg'
import kotlin_logo from 'assets/images/kotlin_logo.svg'
import rust_logo from 'assets/images/rust_logo.png'
import back1 from 'assets/images/back1.svg'
import photo from 'assets/images/photo.png'
import { FC, useMemo } from 'react'
import { useMostUsedPackages } from 'hooks/useMostUsedPackages'
import { map } from 'utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faVk } from '@fortawesome/free-brands-svg-icons'

const Page = styled.div`
  width: 100%;
  background: url(${back1}) center 0;
  background-size: 120rem;
  padding-top: 10rem;
`

const Overview = styled.section`
  width: 100%;
  min-height: 500px;
  padding-bottom: 1rem;
  ${Content} {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`

const ShortInfo = styled.div`
  display: inline-grid;
  grid-column-gap: 50px;
  grid-template-areas:
    'photo nickname'
    'photo fullname';
  align-items: center;
  position: relative;
  @media screen and (max-width: 960px) {
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
  @media screen and (max-width: 960px) {
    font-size: 5rem;
  }
`

const Fullname = styled(DeterminatingText)`
  font-weight: 300;
  font-size: 3rem;
  background-color: ${mix(0.5, theme.front, theme.back)};
  grid-area: fullname;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
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
  position: relative;
  margin-bottom: 5rem;
  background: ${mix(0.05, 'black', theme.back)};
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.2);

  ${Content} {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 1rem 0 3rem 0;
    align-items: center;
    height: 100%;
    gap: 2rem 0;
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
  height: 100%;
  position: relative;
  min-width: 20rem;
`

const ExpValue = styled(DeterminatingText)`
  font-weight: 900;
  font-size: 5rem;
  line-height: 5rem;
`

const ExpDesc = styled(DeterminatingText)`
  position: absolute;
  white-space: nowrap;
  left: 50%;
  translate: -50%;
  bottom: -1.5rem;
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
  @media screen and (max-width: 960px) {
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

const StackWrapper = styled.section`
  margin-top: 10rem;
  ${Content} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`

const StackColumns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }
`

const StackSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: center;
    li {
      text-align: center;
    }
  }
`

const StackSectionTitle = styled(DeterminatingText)`
  background: ${theme.primary('45deg')};
  font-size: 3rem;
`

const StackList = styled.ul`
  margin-top: 1rem;
  position: relative;
  &:before {
    position: absolute;
    content: '';
    display: block;
    left: -1rem;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${theme.primary()};
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
  li {
    font-size: 2rem;
    &:before {
      content: '* ';
      background: ${theme.secondary('45deg')};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 30px #f42e2e);
    }
  }
`

const TopPackagesWrapper = styled.section`
  margin-top: 10rem;
  ${Content} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`

type PackageStats = {
  count: number
  related: number
  name: string
}

const PackagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledUserPackage = styled.li<{ progress: number }>`
  display: flex;
  gap: 24px;
  position: relative;
  align-items: center;
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: ${({ progress }) => progress + '%'};
    background: ${theme.primary('90deg')};
    background-attachment: fixed;
  }

  &:after {
    filter: grayscale(100%);
    opacity: 0.3;
    width: 100%;
  }
`

const PackageCrown = styled.div<{ value: number }>`
  font-size: 3rem;
  color: ${({ value }) => {
    switch (value) {
      case 0:
        return '#fac059'
      case 1:
        return '#eeeeee'
      case 2:
        return '#8d4700'
      default:
        return 'transparent'
    }
  }};
`

const PackageName = styled(DeterminatingText)`
  font-size: 2rem;
`

const PackageSuffix = styled(DeterminatingText)`
  font-size: 2rem;
  background-color: ${mix(0.2, theme.front, theme.back)};
`

const UsedPackage: FC<{ pkg: PackageStats; index: number }> = ({ pkg, index }) => {
  return (
    <StyledUserPackage progress={pkg.related}>
      <PackageCrown value={index}>
        <FontAwesomeIcon icon={faCrown} />
      </PackageCrown>
      <PackageName>{pkg.name}</PackageName>
      <PackageSuffix>[{pkg.count}]</PackageSuffix>
    </StyledUserPackage>
  )
}

const TopPackages: FC = () => {
  const [data, loading, error] = useMostUsedPackages()

  const top = useMemo(() => {
    if (!data) return []
    const max = Math.max(...Object.values(data))
    return Object.entries(data)
      .filter(([key]) => !key.includes('@types'))
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([key, value]) => ({
        count: value,
        related: map(+value, 0, max),
        name: key,
      })) as PackageStats[]
  }, [data])

  return !data ? (
    <DeterminatingText>Loading...</DeterminatingText>
  ) : (
    <PackagesList>
      {top.map((v, i) => (
        <UsedPackage pkg={v} index={i} key={v.name} />
      ))}
    </PackagesList>
  )
}

const Links = styled.section`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  font-size: 2rem;
  @media screen and (max-width: 960px) {
    width: 100%;
    align-items: center;
  }
`

const ColoredLink = styled.a<{ color: string }>`
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  span {
    background-color: ${({ color }) => color};
  }
`

export const CV: FC = () => {
  return (
    <Page>
      {/*<Header />*/}
      <Overview>
        {/*<OverBlurred>*/}
        {/*  <GlowBlock1 />*/}
        {/*  <GlowBlock2 />*/}
        {/*</OverBlurred>*/}
        <Content>
          <ShortInfo>
            <Photo src={photo} />
            <Nickname>LIMPIX31</Nickname>
            <Fullname>Danil Karpenko</Fullname>
            <Age />
          </ShortInfo>
          <Links>
            <ColoredLink color={'#d8c7ff'} href={'mailto://limpix31@gmail.com'}>
              <FontAwesomeIcon icon={faEnvelope} />
              <DeterminatingText as={'span'}>limpix31@gmail.com</DeterminatingText>
            </ColoredLink>
            <ColoredLink color={'#a9fff4'} href={'https://github.com/LIMPIX31'}>
              <FontAwesomeIcon icon={faGithub} />
              <DeterminatingText as={'span'}>LIMPIX31</DeterminatingText>
            </ColoredLink>
            <ColoredLink color={'#ffe7a9'} href={'https://discord.gg/75uYTryUu8'}>
              <FontAwesomeIcon icon={faDiscord} />
              <DeterminatingText as={'span'}>LIMPIX31#9144</DeterminatingText>
            </ColoredLink>
            <ColoredLink color={'#ffa9ca'} href={'https://vk.ru/limpix31'}>
              <FontAwesomeIcon icon={faVk} />
              <DeterminatingText as={'span'}>Danil Karpenko</DeterminatingText>
            </ColoredLink>
          </Links>
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
            <ExpValue style={{ backgroundColor: '#888888' }}>6</ExpValue>
            <ExpDesc>Monthes in commercial development</ExpDesc>
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
      <StackWrapper>
        <Content>
          <Title>I&apos;m FullStack</Title>
          <StackColumns>
            <StackSection>
              <StackSectionTitle>Front</StackSectionTitle>
              <StackList>
                <DeterminatingText as={'li'}>TypeScript 4.8</DeterminatingText>
                <DeterminatingText as={'li'}>React 18</DeterminatingText>
                <DeterminatingText as={'li'}>MobX 6</DeterminatingText>
                <DeterminatingText as={'li'}>Redux Toolkit</DeterminatingText>
                <DeterminatingText as={'li'}>Styled Components</DeterminatingText>
                <DeterminatingText as={'li'}>Jest + testing-library</DeterminatingText>
              </StackList>
            </StackSection>
            <StackSection>
              <StackSectionTitle>Back</StackSectionTitle>
              <StackList>
                <DeterminatingText as={'li'}>NodeJS 18</DeterminatingText>
                <DeterminatingText as={'li'}>Express</DeterminatingText>
                <DeterminatingText as={'li'}>Nest</DeterminatingText>
                <DeterminatingText as={'li'}>MongoDB</DeterminatingText>
                <DeterminatingText as={'li'}>Docker</DeterminatingText>
                <DeterminatingText as={'li'}>Nginx</DeterminatingText>
              </StackList>
            </StackSection>
          </StackColumns>
        </Content>
      </StackWrapper>
      <TopPackagesWrapper>
        <Content>
          <Title>Top 5 packages</Title>
          <TopPackages />
        </Content>
      </TopPackagesWrapper>
    </Page>
  )
}
