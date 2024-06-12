import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Emprestimo from '#models/emprestimo'

export default class Emprestimoseeder extends BaseSeeder {
  async run() {
     await Emprestimo.createMany([
      { livroId: 1, clienteId: 2, data_emprestimo: '2024-03-01', data_devolucao: '2024-03-30' },
      { livroId: 3, clienteId: 4, data_emprestimo: '2024-04-01', data_devolucao: '2024-04-29' },
      { livroId: 4, clienteId: 5, data_emprestimo: '2024-05-01', data_devolucao: '2024-05-31' },
      { livroId: 5, clienteId: 6, data_emprestimo: '2024-06-01', data_devolucao: '2024-06-30' },
      { livroId: 7, clienteId: 7, data_emprestimo: '2024-07-01', data_devolucao: '2024-07-29' },
      { livroId: 8, clienteId: 8, data_emprestimo: '2024-08-01', data_devolucao: '2024-08-31' },
      { livroId: 9, clienteId: 9, data_emprestimo: '2024-09-01', data_devolucao: '2024-09-30' },
      { livroId: 2, clienteId: 10, data_emprestimo: '2024-10-01', data_devolucao: '2024-10-29' },
      { livroId: 6, clienteId: 3, data_emprestimo: '2024-11-01', data_devolucao: '2024-11-30' },
      { livroId: 10, clienteId: 1, data_emprestimo: '2024-12-01', data_devolucao: '2024-12-30' }      
    ])
  }
}