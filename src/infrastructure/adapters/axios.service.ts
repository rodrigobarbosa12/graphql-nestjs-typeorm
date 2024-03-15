import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'

@Injectable()
export class AxiosService {
  httpService: HttpService

  constructor() {
    this.httpService = new HttpService()
  }

  async get(token: string) {
    const { URL } = process.env

    return await this.httpService.axiosRef.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
}
