import { createRoot, hydrateRoot } from 'react-dom/client'
import { Styles } from 'style/global'
import { Fonts } from 'style/font'
import { StrictMode } from 'react'
import Home from 'routes/Home'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Styles />
    <Fonts />
    <Home />
  </StrictMode>,
)
