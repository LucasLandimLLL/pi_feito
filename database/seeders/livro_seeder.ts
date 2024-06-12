import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Livro from '#models/livro'

export default class Livroseeder extends BaseSeeder {
  async run() {
     await Livro.createMany([
      { titulo: 'Ensaio sobre a Cegueira', disponibilidade: 10, categoriaId: 1, editoraId: 1, autorId: 1 },
      { titulo: 'A Hora da Estrela', disponibilidade: 5, categoriaId: 2, editoraId: 2, autorId: 2 },
      { titulo: 'O Corvo',  disponibilidade: 20, categoriaId: 4, editoraId: 3, autorId: 3 },
      { titulo: 'Dom Casmurro', disponibilidade: 15, categoriaId: 1, editoraId: 3, autorId: 4 },
      { titulo: 'Hamlet', disponibilidade: 8, categoriaId: 5, editoraId: 5, autorId: 5 },
      { titulo: 'Orgulho e Preconceito', disponibilidade: 12, categoriaId: 7, editoraId: 6, autorId: 6 },
      { titulo: 'Cem Anos de Solidão', disponibilidade: 7, categoriaId: 8, editoraId: 7, autorId: 7 },
      { titulo: 'Capitães da Areia', disponibilidade: 30, categoriaId: 3, editoraId: 1, autorId: 8 },
      { titulo: 'Mrs. Dalloway', disponibilidade: 16, categoriaId: 9, editoraId: 2, autorId: 9 },
      { titulo: 'A Metamorfose', disponibilidade: 21, categoriaId: 10, editoraId: 3, autorId: 10 }
    ])
  }
}