import NextAuth, { NextAuthOptions } from 'next-auth'
import KeycloakProvider from 'next-auth/providers/keycloak'
import axios from 'axios'

import { KEYCLOAK_CONFIG } from '@/constants/keycloak'

export const options: NextAuthOptions = {
  providers: [KeycloakProvider(KEYCLOAK_CONFIG)],
  secret: process.env.NEXT_PUBLIC_SECRET ?? 'secret',
  events: {
    signOut: async ({ token }) => {
      if (token.provider === 'keycloak') {
        await axios.get(
          `${KEYCLOAK_CONFIG.issuer}/protocol/openid-connect/logout?id_token_hint=${token.idToken}`,
        )
      }
    },
  },
  callbacks: {
    session: ({ session, token }) => {
      session.accessToken = token.accessToken
      session.user = { name: token.name, email: token.email }

      return session
    },
    jwt: async ({ token, account }) => {
      if (!!account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.provider = account.provider
        token.exp = account.expires_at
        token.idToken = account.id_token
      }

      return token
    },
  },
}

export default NextAuth(options)
