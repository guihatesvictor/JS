function botaocalcular() {
    var nr = document.getElementById("nrDigitado").value
    var nr2 = document.getElementById("nrDigitado2").value

    var soma = Number(nr) + Number(nr2)
    var subtracao = nr - nr2
    var multiplicacao = nr * nr2
    var divisao = nr / nr2
    var resto = nr % nr2
    var exponenciacao = nr ** nr2

document.getElementById("resultados").innerHTML +=
    `${nr} x ${nr2} = ${multiplicacao} <br>
    ${nr} + ${nr2} = ${soma} <br>
    ${nr} - ${nr2} = ${subtracao} <br>
    ${nr} % ${nr2} = ${resto} <br>
    ${nr} ** ${nr2} = ${exponenciacao} <br>`
}

function botaolimpar() {
    document.getElementById("resultados").innerHTML = ""
    document.getElementById("nrDigitado").value = ""
    document.getElementById("nrDigitado2").value = ""
}