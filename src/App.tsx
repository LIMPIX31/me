import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CV } from 'routes/CV'
import { Header } from 'components/macro/Header'
import { Services } from 'routes/Services'

export const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={''} element={<CV />} />
        <Route path={'cv'} element={<CV />} />
        <Route path={'services'} element={<Services />} />
      </Routes>
    </>
  )
}
