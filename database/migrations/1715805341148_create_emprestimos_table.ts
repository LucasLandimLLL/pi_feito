import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'emprestimos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('livro_id').unsigned().references('id').inTable('livros')
      table.integer('cliente_id').unsigned().references('id').inTable('clientes')
      table.date('data_emprestimo').notNullable()
      table.date('data_devolucao').notNullable()
      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}