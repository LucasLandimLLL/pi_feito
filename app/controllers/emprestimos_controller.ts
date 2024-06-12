import type { HttpContext } from '@adonisjs/core/http'
import Emprestimo from '#models/emprestimo'

export default class EmprestimosController {
    async index({ request }:HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Emprestimo.query().paginate(page, perPage)
    }
    
    async show({ params }:HttpContext) {
        return await Emprestimo.findOrFail(params.id)
    }
    
    async store({ request }:HttpContext) {
        const dados = request.only(['livroId', 'clienteId', 'data_emprestimo', 'data_devolucao'])
        return await Emprestimo.create(dados)
    }
    
    async update({ params, request }:HttpContext) {
        const emprestimo = await Emprestimo.findOrFail(params.id)
        const dados = request.only(['livroId', 'clienteId', 'data_emprestimo', 'data_devolucao'])
        emprestimo.merge(dados)
        return await emprestimo.save()
    }
    
    async destroy({ params }:HttpContext) {
        const emprestimo = await Emprestimo.findOrFail(params.id)
        await emprestimo.delete()
        return { msg: 'Registro deletado com sucesso', emprestimo }
    }
}