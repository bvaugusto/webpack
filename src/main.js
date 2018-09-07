import 'font-awesome/css/font-awesome.css';
import './assets'

const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return {...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'
console.log(produto, novoProduto)

const novoProduto2 = clone(produto)
novoProduto2.nome = 'Caneta Bic Vermelha'
console.log(produto, novoProduto2)

import Pessoa from './pessoa'

const atendente = new Pessoa
console.log('Pessoa, '+atendente.cumprimentar())




