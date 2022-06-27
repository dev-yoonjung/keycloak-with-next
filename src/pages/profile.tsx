import { useKeycloak } from '@react-keycloak-fork/ssr'

import Layout from '@/components/Layout'

import type { KeycloakTokenParsed } from 'keycloak-js'

type TUser = KeycloakTokenParsed & {
  email?: string
  preferred_username?: string
  given_name?: string
  family_name?: string
}

interface IInformation {
  user: TUser
}

function Information({ user }: IInformation) {
  return (
    <ul>
      <li>
        <span className="font-weight-bold mr-1">Email </span>
        <span className="text-muted">{user.email}</span>
      </li>
      <li>
        <span className="font-weight-bold mr-1">Username </span>
        <span className="text-muted">{user.preferred_username}</span>
      </li>
      <li>
        <span className="font-weight-bold mr-1">First Name </span>
        <span className="text-muted">{user.given_name}</span>
      </li>
      <li>
        <span className="font-weight-bold mr-1">Last Name </span>
        <span className="text-muted">{user.family_name}</span>
      </li>
    </ul>
  )
}

export default function Profile() {
  const { keycloak } = useKeycloak()
  const user: TUser | undefined = keycloak?.tokenParsed

  return (
    <Layout>
      <h1 className="my-5">User Profile</h1>
      {!!user ? (
        <Information user={user} />
      ) : (
        <span>Please login to view profile.</span>
      )}
    </Layout>
  )
}
