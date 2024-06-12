import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Livro from './livro.js'
import Cliente from './cliente.js'

export default class Reserva extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime()
  declare data_reserva: DateTime

  @column.dateTime()
  declare data_expiracao: DateTime

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