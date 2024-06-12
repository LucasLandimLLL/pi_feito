import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Reserva from '#models/reserva'

export default class Reservaseeder extends BaseSeeder {
  async run() {
     await Reserva.createMany([
      { clienteId: 1, livroId: 1, data_reserva: '2024-04-01', data_expiracao: '2024-04-30' },
      { clienteId: 2, livroId: 2, data_reserva: '2024-05-01', data_expiracao: '2024-05-31' },
      { clienteId: 3, livroId: 3, data_reserva: '2024-06-01', data_expiracao: '2024-06-30' },
      { clienteId: 5, livroId: 4, data_reserva: '2024-07-01', data_expiracao: '2024-07-31' },
      { clienteId: 6, livroId: 5, data_reserva: '2024-08-01', data_expiracao: '2024-08-31' },
      { clienteId: 7, livroId: 6, data_reserva: '2024-09-01', data_expiracao: '2024-09-30' },
      { clienteId: 8, livroId: 7, data_reserva: '2024-10-01', data_expiracao: '2024-10-31' },
      { clienteId: 9, livroId: 9, data_reserva: '2024-11-01', data_expiracao: '2024-11-30' },
      { clienteId: 10, livroId: 10, data_reserva: '2024-12-01', data_expiracao: '2024-12-31' },
      { clienteId: 11, livroId: 11, data_reserva: '2025-01-01', data_expiracao: '2025-01-31' }      
    ])
  }
}