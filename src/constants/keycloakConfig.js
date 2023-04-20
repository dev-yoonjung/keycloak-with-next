export const KEYCLOAK_CONFIG = {
  realm: process.env.KEYCLOAK_REALM || 'next',
  url: process.env.KEYCLOAK_URL || 'http://localhost:8000/auth',
  clientId: process.env.KEYCLOAK_CLIENT_ID || 'next-client',
}
