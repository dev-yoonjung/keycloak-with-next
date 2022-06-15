import Link from 'next/link'

export default function Header() {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <Link href="/" className="my-0 mr-md-auto font-weight-bold text-dark">
        Next.js + Keycloak
      </Link>
    </header>
  )
}
