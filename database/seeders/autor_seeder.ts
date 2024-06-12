import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Autor from '#models/autor'

export default class Autorseeder extends BaseSeeder {
  public async run() {
     await Autor.createMany([
      { nome: 'José Saramago' },
      { nome: 'Clarice Lispector' },
      { nome: 'Edgar Allan Poe' },
      { nome: 'Machado de Assis' },
      { nome: 'William Shakespeare' },
      { nome: 'Jane Austen' },
      { nome: 'Gabriel García Márquez' },
      { nome: 'Jorge Amado' },
      { nome: 'Virginia Woolf' },
      { nome: 'Franz Kafka' },
    ])
  }
}