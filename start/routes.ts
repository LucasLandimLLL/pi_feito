/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import router from '@adonisjs/core/services/router'
import AutorsController from '#controllers/autors_controller'
import CategoriasController from '../app/controllers/categorias_controller.js'
import ClientesController from '#controllers/clientes_controller'
import EditorasController from '#controllers/editoras_controller'
import EmprestimosController from '#controllers/emprestimos_controller'
import LivrosController from '#controllers/livros_controller'
import ReservasController from '#controllers/reservas_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/Autores', AutorsController).apiOnly()
router.resource('/Categoria', CategoriasController).apiOnly()
router.resource('/Clientes', ClientesController).apiOnly()
router.resource('/Editoras', EditorasController).apiOnly()
router.resource('/Emprestimos', EmprestimosController).apiOnly()
router.resource('/Livros', LivrosController).apiOnly()
router.resource('/Reservas', ReservasController).apiOnly()