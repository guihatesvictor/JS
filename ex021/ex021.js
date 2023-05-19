var nomes = []

function botaoFilmes() {

document.getElementById(`resultados`).innerHTML = ``

    var filme = document.getElementById("nome").value

    nomes.push(filme)

    for (var i = 0; i < nomes.length; i++) {
        document.getElementById(`resultados`).innerHTML +=
            `${nomes[i]} <br>`
    } 
}

function botaoLimpar() {
    document.getElementById("resultados").innerHTML = ``
    document.getElementById("nome").value = ``
}