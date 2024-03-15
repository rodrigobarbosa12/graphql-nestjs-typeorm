export interface Session {
  userId: number
  email: string
}

declare global {
  namespace Express {
    interface Request {
      session?: Session
    }
  }
}

export default global
