import { Logger } from '@nestjs/common'
import * as moment from 'moment'
import { JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { ExceptionError, getPayload, getUser } from '../utils'

const freeAccess = (originalUrl: string) => {
  /**
   * originalUrl.startsWith ignora qualquer coisa depois da ultima barra
   */
  switch (true) {
    case originalUrl === '/':
      // case originalUrl.startsWith('/auth/confirm-email/'):
      return true

    default:
      return false
  }
}

export default async function middleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const logger = new Logger('Middleware')

  try {
    if (freeAccess(req.path)) {
      next()
      return
    }

    const {
      headers: { authorization },
    } = req

    if (!authorization) {
      throw ExceptionError('Você não está autorizado(a)', 426)
    }

    // Bearer lkasdjfksdfaDJKÇLÇLKASDA
    const parts = authorization.split(' ')

    if (parts.length !== 2) {
      throw ExceptionError('Token error', 426)
    }

    const [schema, token] = parts

    // Verifica se Schema tem a palavra Bearer
    if (!/^Bearer$/i.test(schema)) {
      throw ExceptionError('Token mal formado', 426)
    }

    const payload = getPayload(token) as JwtPayload

    if (!payload?.exp) {
      throw ExceptionError('Token inválido', 426)
    }

    if (moment() > moment.unix(payload?.exp)) {
      throw ExceptionError('Sessão expirada', 426)
    }
    const user = getUser(token)

    if (!user) {
      logger.debug('Usuário não encontrado no token')
      throw ExceptionError('Token inválido', 426)
    }

    req.session = {
      userId: user.id,
      email: user.email,
    }

    next()
  } catch (error) {
    logger.error(error)
    res.status(401).json({
      message: error?.message || 'Internal Server Error',
    })
  }
}
