var nrSorteado = parseInt(Math.random() * 100)

var tentativas = 0

function botaoChutar() {
    var nr = prompt("Digite um número")

    tentativas++

    if (nr < nrSorteado) {
        document.getElementById("resultados").innerHTML +=
            ` Você chutou ${nr}, o número que pensei é maior<br>`
    } else if (nr > nrSorteado) {
        document.getElementById("resultados").innerHTML +=
            ` Você chutou ${nr}, o número que pensei é menor<br>`
    } else if (nr == nrSorteado) {
        document.getElementById("resultados").innerHTML +=
            ` <h3>Parabéns, você acertou, o número é ${nrSorteado}<br>
            Você acertou em ${tentativas} tentativas </h3>`
    }
}

function botaoLimpar() {
    location.reload()
}