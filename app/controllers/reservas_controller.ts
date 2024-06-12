import type { HttpContext } from '@adonisjs/core/http'
import Reserva from '#models/reserva'

export default class ReservasController {
    async index({ request }:HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Reserva.query().paginate(page, perPage)
    }
    
    async show({ params }:HttpContext) {
        return await Reserva.findOrFail(params.id)
    }
    
    async store({ request }:HttpContext) {
        const dados = request.only(['clienteId', 'livroId', 'data_reserva', 'data_expiracao'])
        return await Reserva.create(dados)
    }
    
    async update({ params, request }:HttpContext) {
        const reserva = await Reserva.findOrFail(params.id)
        const dados = request.only(['clienteId', 'livroId', 'data_reserva', 'data_expiracao'])
        reserva.merge(dados)
        return await reserva.save()
    }
    
    async destroy({ params }:HttpContext) {
        const reserva = await Reserva.findOrFail(params.id)
        await reserva.delete()
        return { msg: 'Registro deletado com sucesso', reserva }
    }
}