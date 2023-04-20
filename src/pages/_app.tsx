import '@/styles/globals.css'
import '@/styles/index.css'

import cookie from 'cookie'
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak-fork/ssr'

import { KEYCLOAK_CONFIG } from '@/constants/keycloakConfig'

import type { AppProps, AppContext } from 'next/app'
import type { IncomingMessage } from 'http'

interface InitialProps {
  cookies: unknown
}

export default function App({
  Component,
  pageProps,
  cookies,
}: AppProps & InitialProps) {
  return (
    <SSRKeycloakProvider
      keycloakConfig={KEYCLOAK_CONFIG}
      persistor={SSRCookies(cookies)}
      initOptions={{
        onLoad: 'check-state',
        checkLoginIframe: false,
      }}
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
