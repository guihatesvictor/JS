function botaoTabuada() {
    var nr = document.getElementById("nome").value
    var contador = 1

    while (contador <= 10) {
        document.getElementById("resultados").innerHTML +=
            `${nr} x ${contador} = ${nr * contador} <br>`
        contador++
    }
}

function botaoLimpar() {
    document.getElementById("resultados").innerHTML = ``
    document.getElementById("nome").value = ``
}