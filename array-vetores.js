//Criando um array vazio
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 8, 5, 2, 7]
var nomes = [`Victor`, `Caio`, `Ian`]
var novoVetor = [20, `SESI`, true]

//Acessando os dados de um vetor
console.log(nomes[0])
console.log(novoVetor[2])

//              0         1         2        3        4
var frutas = [`Maça`, `Laranja`, `Pera`, `Morango`, `Uva`]
for (var i = 0; i <= frutas.length; i++) {
    console.log(frutas[i])
}


//Adicionando novo valor no final do vetor
frutas.push(`Abacaxi`)

//Modificando o valor de um índice do vetor
frutas[0] = `Melão`


//Simplificando o vetor comum
for (var pos in frutas) {
    console.log(frutas[pos])
}


//forEach - significa para cada item do vetor
//dentro do parenteses vai a variável que irá receber o conteúdo de cada linha do vetor
//e com o => {} informamos o bloco que irá executar para cada linha
frutas.forEach(item => {
    console.log(`item pelo forEach`, item)
})

frutas.forEach((item, indice) => {
    console.log(`item pelo forEach`, indice, item)
})