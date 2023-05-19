function botaoFilmes() {
    var filmes = [`Interestelar`, `Star Wars`, `Harry Poter`, `Super Mario World`, `Vingadores`, `Barbie`]
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("resultados").innerHTML +=
            `Posição no vetor ${i} - ${filmes[i]} <br>`
    }
}

function botaoLimpar() {
    document.getElementById("resultados").innerHTML = ``
}