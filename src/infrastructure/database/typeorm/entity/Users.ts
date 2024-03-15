import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 120 })
  name: string

  @Column({ length: 150 })
  email: string

  @Column({ length: 200 })
  password: string

  @Column({ length: 30 })
  phone: string

  @Column({ length: 200, default: null })
  token?: string

  @Column({
    type: 'enum',
    enum: ['0', '1'],
    default: '0',
  })
  active: '0' | '1'

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date

  @UpdateDateColumn({ type: 'datetime' })
  updatedAt: Date
}
