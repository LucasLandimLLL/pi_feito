import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Editora from '#models/editora'

export default class Editoraseeder extends BaseSeeder {
  async run() {
     await Editora.createMany([
      { nome: "Companhia das Letras", endereco: "Rua Bandeira Paulista, 702, 01404-002, São Paulo, SP", site: "www.companhiadasletras.com.br" },
      { nome: "Rocco", endereco: "Av. Presidente Wilson, 231, 20030-021, Rio de Janeiro, RJ", site: "www.rocco.com.br" },
      { nome: "DarkSide Books", endereco: "Rua Teodoro Sampaio, 2355, Pinheiros, 05405-200, São Paulo, SP", site: "www.darksidebooks.com.br" },
      { nome: "Grupo Editorial Record", endereco: "Rua Argentina, 171, 20921-380, Rio de Janeiro, RJ", site: "www.record.com.br" },
      { nome: "Penguin-Companhia", endereco: "Rua Bandeira Paulista, 702, 01404-002, São Paulo, SP", site: "www.penguincompanhia.com.br" },
      { nome: "Martin Claret", endereco: "Rua Dr. Zuquim, 926, Santana, 02035-021, São Paulo, SP", site: "www.martinclaret.com.br" },
      { nome: "Editora Autêntica", endereco: "Rua Aimorés, 981, Funcionários, 30140-071, Belo Horizonte, MG", site: "www.autenticaeditora.com.br" },
      { nome: "Editora Lua Nova", endereco: "Alameda dos Poetas, 101, 11015-000, Santos, SP", site: "www.editoraluanova.com.br" },
      { nome: "Editora Sol Poente", endereco: "Boulevard dos Escritores, 202, 13400-000, Piracicaba, SP", site: "www.editorasolpoente.com.br" },
      { nome: "Editora Estrela do Mar", endereco: "Rua das Marés, 303, 40140-000, Salvador, BA", site: "www.editoraestreladomar.com.br" }
    ])
  }
}