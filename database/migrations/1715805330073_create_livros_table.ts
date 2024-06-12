import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'livros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo').notNullable()
      table.boolean('disponibilidade').notNullable()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias')
      table.integer('editora_id').unsigned().references('id').inTable('editoras')
      table.integer('autor_id').unsigned().references('id').inTable('autores')
      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}