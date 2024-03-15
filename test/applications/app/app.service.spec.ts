import { Test, TestingModule } from '@nestjs/testing'
import { DatabaseModule } from 'src/infrastructure/database/typeorm/database.module'
import { AppService } from 'src/applications/app/app.service'
import { userProviders } from 'src/infrastructure/database/typeorm/providers/user.providers'
import { Users } from 'src/infrastructure/database/typeorm/entity/Users'

jest.mock('src/infrastructure/database/typeorm/database.module')

const mockUser: Users[] = [
  {
    id: 1,
    active: '1',
    name: '',
    email: '',
    password: '',
    phone: '',
    token: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    active: '0',
    name: '',
    email: '',
    password: '',
    phone: '',
    token: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

describe('Test to AppService', () => {
  let service: AppService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ...userProviders,
        AppService,
        {
          provide: AppService,
          useValue: {
            findAll: jest.fn(() => Promise.resolve(mockUser)),
            create: jest.fn(() => Promise.resolve(undefined)),
          },
        },
        {
          provide: 'DATA_SOURCE',
          useFactory: jest.fn(),
        },
        {
          provide: 'USER_REPOSITORY-OF-EXEMPLE',
          useFactory: jest.fn(),
          inject: ['DATA_SOURCE'],
        },
      ],
    }).compile()

    service = module.get<AppService>(AppService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should call the function create', async () => {
    const result = await service.findAll()

    expect(result).toBe(mockUser)
  })

  it('should call the function create', async () => {
    const result = await service.create({
      name: 'Rodrigo Barbosa',
      email: 'rbarbosa@mtrix.com.br',
      password: '123456',
    })

    expect(result).toBe(undefined)
  })
})
