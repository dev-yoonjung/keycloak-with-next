import { ReactNode } from 'react'
import Head from 'next/head'

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
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <div className="container my-5">{children}</div>
      <Footer />
    </div>
  )
}
