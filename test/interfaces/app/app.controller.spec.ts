import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from 'src/interfaces/app/app.module'
import { AppService } from 'src/applications/app/app.service'

jest.mock('src/applications/app/app.service')

describe('Test to AppController', () => {
  let app: INestApplication

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        {
          provide: AppService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile()

    app = module.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    jest.restoreAllMocks()
    await app.close()
  })

  it(`/GET findAll`, async () => {
    return await request(app.getHttpServer())
      .get('/app/find-all')
      .expect(200)
      .expect({})
  })

  it(`/POST create`, async () => {
    return await request(app.getHttpServer())
      .post('/app')
      .expect(201)
      .expect({})
  })
})
