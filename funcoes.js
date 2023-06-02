
//Declarando um função sem parametro e sem retorno
function exibirInformacao() {
    console.log(`Executei a função exibir info`)
}

//Chamando a função
exibirInformacao()


function ricardoCalculeTabuada(nr) {
    for (var i = 0; i <= 20; i++) {
        console.log(`${nr} x ${i} = ${nr * i}`)
    }
}

//Chamando a função
ricardoCalculeTabuada(5)

function ricardoCalculeDobro(nr) {
    var dobro = nr * 2
    return dobro
}

var resultado = ricardoCalculeDobro(7)
console.log(resultado)
var resultado = ricardoCalculeDobro(73753)
console.log(resultado)



function calcularMedia(n1, n2) {
    var soma = n1 + n2
    var media = soma / 2
    return media
}

var aluno1 = calcularMedia(8, 9)
console.log(aluno1)


//Validação de senha
var user = "adm"
senha = 123

var possoAcessar = validarLogin(login, senha)

if (possoAcessar == true)

 {
    if(login == `` || senha == ``) {
        return false
    }

    if(login == "adm" && senha == 123) {
        return true
    }

    else {
        return false
    }
}