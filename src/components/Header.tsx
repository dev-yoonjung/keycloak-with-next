import { useKeycloak } from '@react-keycloak-fork/ssr'

import Link from 'next/link'

export default function Header() {
  const { keycloak } = useKeycloak()

  const onSignup = () => {
    const signupUrl = keycloak?.createRegisterUrl()
    if (!!signupUrl) {
      window.location.href = signupUrl
    }
  }

  const onLogin = () => {
    const loginUrl = keycloak?.createLoginUrl()
    if (!!loginUrl) {
      window.location.href = loginUrl
    }
  }

  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <Link href="/" className="my-0 mr-md-auto font-weight-bold text-dark">
        Next.js + Keycloak
      </Link>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link href="/" className="p-2 text-dark">
          Home
        </Link>
      </nav>
      {keycloak?.authenticated ? (
        <></>
      ) : (
        <>
          <button
            type="button"
            onClick={onSignup}
            className="mx-2 btn btn-outline-primary"
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={onLogin}
            className="mx-2 btn btn-outline-primary"
          >
            Login
          </button>
        </>
      )}
    </header>
  )
}
