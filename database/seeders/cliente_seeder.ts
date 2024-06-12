import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class Clienteseeder extends BaseSeeder {
  async run() {
     await Cliente.createMany([
      { nome: "João Silva", email: "joaosilva@email.com", telefone: "21987654321", endereco: "Rua das Laranjeiras, 5" },
      { nome: "Ana Costa", email: "anacosta@email.com", telefone: "21987654322", endereco: "Avenida Atlântica, 6" },
      { nome: "Pedro Alves", email: "pedroalves@email.com", telefone: "21987654323", endereco: "Praça da Sé, 7" },
      { nome: "Maria Clara", email: "mariaclara@email.com", telefone: "21987654324", endereco: "Alameda dos Anjos, 8" },
      { nome: "Lucas Martins", email: "lucasmartins@email.com", telefone: "21987654325", endereco: "Travessa do Sol, 9" },
      { nome: "Carla Dias", email: "carladias@email.com", telefone: "21987654326", endereco: "Beco das Flores, 10" },
      { nome: "Rafael Souza", email: "rafaelsouza@email.com", telefone: "21987654327", endereco: "Largo do Machado, 11" },
      { nome: "Fernanda Lima", email: "fernandalima@email.com", telefone: "21987654328", endereco: "Rua da Harmonia, 12" },
      { nome: "Gustavo Pereira", email: "gustavopereira@email.com", telefone: "21987654329", endereco: "Avenida Paulista, 13" },
      { nome: "Juliana Rocha", email: "julianarocha@email.com", telefone: "21987654330", endereco: "Rua Augusta, 14" }      
    ])
  }
}