import { useKeycloak } from '@react-keycloak-fork/ssr'

import Layout from '@/components/Layout'

interface IStatus {
  authenticated: boolean
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

  return (
    <Layout title="Home | Next.js + Keycloak Example">
      <h1 className="mt-5">Hello Next.js + Keycloak 👋</h1>
      <div className="mb-5 lead text-muted">
        This is an example of a Next.js site using Keycloak.
      </div>

      <Status authenticated={!!keycloak?.authenticated} />
    </Layout>
  )
}
