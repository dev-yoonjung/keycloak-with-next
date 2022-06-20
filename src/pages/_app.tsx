import '@/styles/globals.css'
import '@/styles/index.css'

import cookie from 'cookie'
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak-fork/ssr'

import type { AppProps, AppContext } from 'next/app'
import type { IncomingMessage } from 'http'

interface InitialProps {
  cookies: unknown
}

const keycloakConfig = {
  realm: 'next',
  url: 'http://localhost:8000/auth',
  clientId: 'next-client',
}

export default function App({
  Component,
  pageProps,
  cookies,
}: AppProps & InitialProps) {
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakConfig}
      persistor={SSRCookies(cookies)}
    >
      <Component {...pageProps} />
    </SSRKeycloakProvider>
  )
}

function parseCookies(req?: IncomingMessage) {
  !!req ? cookie.parse(req.headers.cookie || '') : {}
}

App.getInitialProps = async (context: AppContext) => ({
  // extract cookies from the request
  cookies: parseCookies(context?.ctx?.req),
})
