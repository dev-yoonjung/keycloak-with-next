export const KEYCLOAK_CONFIG = {
  realm: process.env.KEYCLOAK_REALM || 'nextrealm',
  url: process.env.KEYCLOAK_URL || 'http://127.0.0.1:8000/auth',
  clientId: process.env.KEYCLOAK_CLIENT_ID || 'nextjs',
}
