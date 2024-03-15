import * as jwt from 'jsonwebtoken'
import { JwtPayload } from 'jsonwebtoken'

export const getPayload = (token: string) => {
  console.log(token)
  const tokenDecoded = jwt?.decode(token, { complete: true })

  if (!tokenDecoded) {
    return null
  }

  return tokenDecoded.payload
}

export const getUser = (token: string) => {
  const tokenDecoded = jwt?.decode(token, { complete: true }) as JwtPayload

  if (!tokenDecoded) {
    return null
  }

  const {
    sid: id,
    preferred_username: dcNome,
    name,
    email,
  } = tokenDecoded.payload

  return {
    id,
    dcNome,
    name,
    email,
  }
}
