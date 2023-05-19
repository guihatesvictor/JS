alert("Olá Mundo!!")

console.log("Olá Mundo, estou utilizando o conslole")
console.error("Esta é uma mensagem de error")
console.warn("Esta é uma mensagem de alerta")
console.info("Esta é uma mensagem de informação")

function Botao1() {
    alert("Você cliclou no botão")
}

function BotaoCorFundo() {
    document.body.style.backgroundColor = "grey"
}

function BotaoNome() {
    var nome2 = prompt("Digite seu nome")
    confirm("Olá " + nome2 + ", entendeu variável?")
}

function BotaoSomar() {
    var nr1 = prompt("Digite um número:")
    var nr2 = prompt("Digite outro número:")

    nr1 = Number(nr1)
    nr2 = Number(nr2)

    var soma = nr1 + nr2

    //alert(soma)

    document.getElementById("res-soma").innerHTML = soma +=
        ` A soma de ${nr1} + ${nr2} = ${soma}`
}


//Declarando variáveis
var nome = "Guilherme" //string
var sobrenome = "Carbello" //string
var idade = 16 //number
var aprovado = true //boolean

console.log(typeof nome)
console.log(nome + ` ` + sobrenome)

var n1 = 10
var n2 = 15
console.log(n1 + n2)
var n3 = "10"
var n4 = "15"
console.log(n3 + n4)

n1 = n2
console.log("n1 = " + n1 + ` e o n2 = ` + n2)

var salario = 1290.85

salario = salario + 200
console.log(salario)

function BotaoCidade() {
    var cidade = document.getElementById("cidade").value
    document.getElementById("resultadoCidade").innerHTML +=
        `<br> O nome da cidade ${cidade}`
}


//Operadores aritméticos e Ordem de precedência
var opSoma = 5 + 2
console.log(opSoma) // 7

var opSubtracao = 5 - 2
console.log(opSubtracao) // 3

var opMultiplicacao = 5 * 2
console.log(opMultiplicacao) // 10

var opDivisao = 5 / 2
console.log(opDivisao) // 2.5

var opExponenciacao = 5 ** 2
console.log(opExponenciacao) // 25

var opResto = 5 % 2
console.log(opResto) // 1



var ordemPrecedencial = 5 + 3 / 2
console.log(ordemPrecedencial) //6.5

var ordemPrecedencial2 = (5 + 3) / 2
console.log(ordemPrecedencial2) // 4
/* 1º ()
   2º **
   3º * /
   4º %
   5º + -
*/

//Constantes - o valor não pode ser alterado depois de atribuído
const pi = 3.14
// pi = 3 - Se o valor for alterado dará erro no JavaScript


//Auto atribuição
var n = 3 // 
n = n + 3 // a variável recebe ela mesma +3
n += 3 // quer dizer o mesmo que a expressão acima

n++ // quando precisamos somar + 1 ao valor da variável

n-- // quando precisamos subtrair - 1 ao valor da variável


// Operadores Relacionais
var n1 = 5
var n2 = 6

console.log(n1 > n2) // > Maior que
console.log(n1 < n2) // < Menor que
console.log(n1 >= n2) // >= Maior ou igual que
console.log(n1 <= n2) // <= Menor ou igual que
console.log(n1 == n2) // == igual
console.log(n1 != n2) // != Nã igua - Diferente

// Estruturas condicionais
if (n1 > n2) {     //Verificando a condição entre parenteses
    // Se a condição for verdadeira "entra" nesse bloco
    console.log("O n1 é maior que o n2")
} else {
    // Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
    console.log("O n1 não é maior que o n2")
}

// Exemplo de condição
var minhaIdade = 18
if (minhaIdade >= 16) {
    console.log("Você pode votar")
} else {
    console.log("Você não pode votar")
}


//Sortear um valor utilizando Math.random()
//parseInt é utilizado para obter a parte inteira do número
var nrSorteado = parseInt(Math.random() * 100)
console.log(nrSorteado)


//Switch case
//É como se fosse vários if else de forma mais simples
var diaSemana = 3
switch (diaSemana) {
    case 1:
        console.log("Hoje é segunda")
        break

    case 2:
        console.log("Hoje é terça")
        break

    case 3:
        console.log("Hoje é quarta")
        break

    case 4:
        console.log("Hoje é quinta")
        break

    case 5:
        console.log("Hoje é sexta :)")
        break

    default:
        console.log("Dia inválido")

}


//For - laço de repetição
//1ª expressão var i = 1)
//(aqui eu inicio o controle de vezes
//2ª expressão var i <= 10
//(aqui nós verificamos a condição para se manter no loop)
//3ª expressão i++
//(aqui acrescentamos na variável +1 vez)
for (var i = 1; i <= 10; i++) {
    console.log(i)
}


//Verificando se o número é par com while
var contador = 1
if (contador % 2 == 0) {
    console.log(`${contador} é par`)
} else {
    console.log(`${contador} é impar`)
}
contador++ //Adicionamos +1 ao contador para não ficar em loop 1