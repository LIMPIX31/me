import { RemixBrowser } from '@remix-run/react'
import { hydrateRoot } from 'react-dom/client'
import { Styles } from './style/global'
import { Fonts } from '~/style/font'

hydrateRoot(
  document,
  <>
    <Styles />
    <Fonts />
    <RemixBrowser />
  </>,
)
