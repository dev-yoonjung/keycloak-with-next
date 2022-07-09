import { useSession, signIn, signOut } from 'next-auth/react'
import axios from 'axios'

import Link from 'next/link'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <Link href="/" className="my-0 mr-md-auto font-weight-bold text-dark">
        Next.js + Keycloak
      </Link>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link href="/" className="p-2 text-dark">
          Home
        </Link>
        <Link href="/profile" className="p-2 text-dark">
          Profile
        </Link>
      </nav>
      {!!session ? (
        <>
          <button
            type="button"
            onClick={() => signOut()}
            className="mx-2 btn btn-outline-primary"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => signIn('keycloak')}
            className="mx-2 btn btn-outline-primary"
          >
            Login
          </button>
        </>
      )}
    </header>
  )
}
