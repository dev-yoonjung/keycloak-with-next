import { ReactNode, useEffect, useMemo } from 'react'
import Head from 'next/head'

import { useSession } from 'next-auth/react'

import Header from './Header'
import Footer from './Footer'

interface IProps {
  children?: ReactNode | string
  title?: string
}

export default function Layout({
  children,
  title = 'Keycloak Example',
}: IProps) {
  const { status, update } = useSession()

  const loading = useMemo(() => status === 'loading', [status])

  useEffect(() => {
    const interval = setInterval(update, 1000 * 60 * 60)
    return () => clearInterval(interval)
  }, [update])

  return (
    <div>
      {!loading && (
        <>
          <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>

          <Header />
          <div className="container my-5">{children}</div>
          <Footer />
        </>
      )}
    </div>
  )
}
