function botaoImpares() {
    var ini = document.getElementById("inicial").value
    var fin = document.getElementById("final").value

    for (var i = ini; i <= fin; i++)
        if (i % 2 > 0) {
            document.getElementById("resultados").innerHTML +=
                `${i} <br>`
        }
}

function botaoLimpar() {
    document.getElementById("resultados").innerHTML = ``
}