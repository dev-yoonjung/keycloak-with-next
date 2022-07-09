import { DefaultSession } from 'next-auth'

export interface IUser {
  name?: string | null
  email?: string | null
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string
    user?: IUser
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
    user?: IUser
  }
}
