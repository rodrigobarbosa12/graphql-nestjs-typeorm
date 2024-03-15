import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class users1681349383707 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '120',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '150',
            isNullable: true,
            default: null,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '200',
            isNullable: true,
            default: null,
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '30',
            isNullable: true,
            default: null,
          },
          {
            name: 'token',
            type: 'varchar',
            length: '200',
            isNullable: true,
            default: null,
          },
          {
            name: 'active',
            type: 'enum',
            enum: ['0', '1'],
            isNullable: false,
            default: "'0'",
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
