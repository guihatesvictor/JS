function botaoNumeros() {
    var nr = document.getElementById("numero").value

    for (var i = 1; i <= nr; i++) {
        document.getElementById("resultados").innerHTML +=
            `<img src="/imagens-de-coracao-para-imprimir-3.png">`
    }
}

function botaoLimpar() {
    document.getElementById("resultados").innerHTML = ``
    document.getElementById("numero").value = ``
}