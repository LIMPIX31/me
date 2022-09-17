import { createRoot } from 'react-dom/client'
import { Styles } from 'style/global'
import { Fonts } from 'style/font'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'App'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Styles />
    <Fonts />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
