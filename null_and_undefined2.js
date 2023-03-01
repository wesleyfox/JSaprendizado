let valor // não definida
//console.log(valor2) // Não inicializada: erro is not defined
console.log(valor) // Inicializada, não definida: undefinined

valor = null
console.log(valor) // variável sem referência objeto(s).

const produto = {}
console.log(produto.preco) //undefined
/* variável inicializada e definida;
propriedade '.preco' de 'produto': undefined
*/

//descomente a linha a baixo para ver o erro
//console.log(produto.preco.a) //erro is not defined
    /* variável inicializada,definida(está vazia);
    propriedade '.a' e '.preco' estão indefinidas;
    interpretador retorna erro quando ambas propriedades,
    '.preco' e '.a' estão indefinidas
    */

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // não é uma boa prática. Deixar esse tipo para linguagem
produto.preco = null // aqui quando não tem ref
delete produto.preco // operador delete remove a propriedade do obj.
console.log(produto)