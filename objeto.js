var listaCarros = []


//Declarando um objeto e informando os atributos
//Todo objeto é declarado com {}
var carro = {
    ano: `2020`,
    modelo: `Gol`,
    marca: `VW`
}

//Exibindo todos os atributos do objeto
console.log(carro)


//Para exibir só um atributo do objeto é usado: objeto.atributo
console.log(carro.ano) 

//Adicionando o objeto carro ao vetor carro
listaCarros.push(carro)

//Novo objeto
carro = {
    ano: `2022`,
    modelo: `Onix`,
    marca: `GM`
}

//Adicionando novo objeto carro ao vetor listaCarros
listaCarros.push(carro)
console.log(listaCarros)

//Exibindo uma lista apenas com o modelo do carro
for (var pos in listaCarros) {
    console.log(listaCarros[pos].modelo)
}