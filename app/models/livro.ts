import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Categoria from './categoria.js'
import Editora from './editora.js'
import Autor from './autor.js'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titulo: string

  @column()
  declare disponibilidade: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare categoriaId: number

  @belongsTo(() => Categoria)
  declare categoria: BelongsTo<typeof Categoria>

  @column()
  declare editoraId: number

  @belongsTo(() => Editora)
  declare editora: BelongsTo<typeof Editora>

  @column()
  declare autorId: number

  @belongsTo(() => Autor)
  declare autor: BelongsTo<typeof Autor>
}