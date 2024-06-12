import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Categoria from '#models/categoria'

export default class Categoriaseeder extends BaseSeeder {
  async run() {
     await Categoria.createMany([
      { nome: 'Romance ' },
      { nome: 'Ficção' },
      { nome: 'Literatura Brasileira' },
      { nome: 'Poesia ' },
      { nome: 'Terror' },
      { nome: 'Tragédia ' },
      { nome: 'Literatura Clássica ' },
      { nome: 'Realismo Mágico ' },
      { nome: 'Modernismo ' },
      { nome: 'Ficção Absurda ' },
    ])
  }
}