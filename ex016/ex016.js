function botaoTabuada() {
    var nr = document.getElementById("nome").value

    for (var contador = 1; contador <= 10; contador++) {
        document.getElementById("resultados").innerHTML +=
            `${nr} x ${contador} = ${nr * contador} <br>`
    }
}

function botaoLimpar() {
    document.getElementById("resultados").innerHTML = ``
    document.getElementById("nome").value = ``
}