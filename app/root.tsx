import type { MetaFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'LIMPIX31',
  viewport: 'width=device-width,initial-scale=1',
  'og:title': 'LIMPIX31',
  'og:description': 'Fullstack Developer',
  'og:url': 'https://limpix31.nodium.ru',
  'og:image': 'https://limpix31.nodium.ru/favicon.ico',
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
