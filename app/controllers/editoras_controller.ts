import type { HttpContext } from '@adonisjs/core/http'
import Editora from '#models/editora'

export default class EditorasController {
    async index({ request }:HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Editora.query().paginate(page, perPage)
    }
    
    async show({ params }:HttpContext) {
        return await Editora.findOrFail(params.id)
    }
    
    async store({ request }:HttpContext) {
        const dados = request.only(['nome', 'endereco', 'site'])
        return await Editora.create(dados)
    }
    
    async update({ params, request }:HttpContext) {
        const editora = await Editora.findOrFail(params.id)
        const dados = request.only(['nome', 'endereco', 'site'])
        editora.merge(dados)
        return await editora.save()
    }
    
    async destroy({ params }:HttpContext) {
        const editora = await Editora.findOrFail(params.id)
        await editora.delete()
        return { msg: 'Registro deletado com sucesso', editora }
    }
}