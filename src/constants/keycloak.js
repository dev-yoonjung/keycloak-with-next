export const KEYCLOAK_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID || 'nextjs',
  clientSecret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET || 'secret',
  issuer:
    process.env.NEXT_PUBLIC_KEYCLOAK_ISSUER ||
    'http://localhost:8000/auth/realms/nextrealm',
}
