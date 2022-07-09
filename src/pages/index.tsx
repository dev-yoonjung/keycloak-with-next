import { useSession } from 'next-auth/react'

import Layout from '@/components/Layout'

function Status({
  status,
}: {
  status: 'loading' | 'authenticated' | 'unauthenticated'
}) {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>
    case 'authenticated':
      return (
        <p>
          You are <span className="text-success">logged in</span>
        </p>
      )
    case 'unauthenticated':
      return (
        <p>
          You are <span className="text-danger">not logged in</span>
        </p>
      )

    default:
      return <></>
  }
}

export default function Home() {
  const { data: session, status } = useSession()

  const message = !!session
    ? `Welcome back ${session.user?.name ?? ''}!`
    : 'Welcome visitor. Please login to continue.'

  return (
    <Layout title="Home | Next.js + Keycloak Example">
      <h1 className="mt-5">Hello Next.js + Keycloak 👋</h1>
      <div className="mb-5 lead text-muted">
        This is an example of a Next.js site using Keycloak.
      </div>

      <Status status={status} />
      <p>{message}</p>
    </Layout>
  )
}
