//estrura indexada
//vetor, unidirecional, agrupar de forma linear
//heterogenio, não possui tamanho fixo

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[3])
console.log(typeof valores)

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // não é uma boa prática arrays não homegênios
console.log(valores)
console.log(valores[valores.length-2])