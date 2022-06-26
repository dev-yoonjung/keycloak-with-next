import { useKeycloak } from '@react-keycloak-fork/ssr'

import Layout from '@/components/Layout'

import type { KeycloakTokenParsed } from 'keycloak-js'

interface IStatus {
  authenticated: boolean
}

type TUser = KeycloakTokenParsed & {
  name?: string
}

function Status({ authenticated }: IStatus) {
  if (authenticated) {
    return (
      <p>
        You are <span className="text-success">logged in</span>
      </p>
    )
  }

  return (
    <p>
      You are <span className="text-danger">not logged in</span>
    </p>
  )
}

export default function Home() {
  const { keycloak } = useKeycloak()
  const user: TUser | undefined = keycloak?.tokenParsed

  const message = !!user
    ? `Welcome back ${user.name}`
    : 'Welcome visitor. Please login to continue.'

  return (
    <Layout title="Home | Next.js + Keycloak Example">
      <h1 className="mt-5">Hello Next.js + Keycloak 👋</h1>
      <div className="mb-5 lead text-muted">
        This is an example of a Next.js site using Keycloak.
      </div>

      <Status authenticated={!!keycloak?.authenticated} />
      <p>{message}</p>
    </Layout>
  )
}
