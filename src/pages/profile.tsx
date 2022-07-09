import { useSession } from 'next-auth/react'

import Layout from '@/components/Layout'
import { IUser } from '@/interfaces/next-auth'

interface IInformation {
  user?: IUser
}

function Information({ user }: IInformation) {
  return (
    <ul>
      <li>
        <span className="font-weight-bold mr-1">Email </span>
        <span className="text-muted">{user?.email}</span>
      </li>
      <li>
        <span className="font-weight-bold mr-1">Username </span>
        <span className="text-muted">{user?.name}</span>
      </li>
    </ul>
  )
}

export default function Profile() {
  const { data: session } = useSession()

  return (
    <Layout>
      <h1 className="my-5">User Profile</h1>
      {!!session ? (
        <Information user={session.user} />
      ) : (
        <span>Please login to view profile.</span>
      )}
    </Layout>
  )
}
