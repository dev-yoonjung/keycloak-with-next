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

  const onLogout = () => {
    const logoutUrl = keycloak?.createLogoutUrl()
    if (!!logoutUrl) {
      window.location.href = logoutUrl
      const cookies = document.cookie.split(';')
      for (const cookie of cookies) {
        const name = cookie.replace(/=.*/, '').trim()
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
      }
    }
  }

  const onMyAccount = () => {
    const accountUrl = keycloak?.createAccountUrl()
    if (!!accountUrl) {
      window.location.href = accountUrl
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
        <Link href="/profile" className="p-2 text-dark">
          Profile
        </Link>
      </nav>
      {keycloak?.authenticated ? (
        <>
          <button
            type="button"
            onClick={onMyAccount}
            className="mx-2 btn btn-outline-primary"
          >
            My Account
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="mx-2 btn btn-outline-primary"
          >
            Logout
          </button>
        </>
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
