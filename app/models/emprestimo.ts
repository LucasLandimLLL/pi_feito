import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Livro from './livro.js'
import Cliente from './cliente.js'

export default class Emprestimo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime()
  declare data_emprestimo: DateTime

  @column.dateTime()
  declare data_devolucao: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare livroId: number

  @belongsTo(() => Livro)
  declare livro: BelongsTo<typeof Livro>

  @column()
  declare clienteId: number

  @belongsTo(() => Cliente)
  declare cliente: BelongsTo<typeof Cliente>
}