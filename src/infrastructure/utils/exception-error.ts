import { HttpException } from '@nestjs/common'

const ExceptionError = (message: string, code: number) => {
  throw new HttpException({ status: code, message }, code, {
    cause: Object.assign(new Error(), { message, code }),
  })
}

export default ExceptionError
