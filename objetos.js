//coleção de pares que possuem chave/valor
//só pode ter um identificador
// objeto.[chave] = valor

const prod1 = {}
prod1.nome = 'Celular Ultra'
prod1.preco = 4000.99
prod1.desconto = 0.40

console.log(prod1)

const prod2 = { //Notação diferente
    nome: 'teste',
    preco: 700.0,
    desconto: 0.45,
    obj: {
        teste: 'testado'
    }
}
console.log(prod2)