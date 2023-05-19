var nomes = []

var imagens = []

function botaoFilmes() {

document.getElementById(`resultados`).innerHTML = ``

    var filme = document.getElementById("nome").value

    var imgs = document.getElementById("img").value

    imagens.push(imgs)

    nomes.push(filme)

    for (var i = 0; i < nomes.length; i++) {
        document.getElementById(`resultados`).innerHTML +=
            `${nomes[i]} <br><br> <img src = "${imagens[i]}">`
    } 
}

function botaoLimpar() {
    document.getElementById("resultados").innerHTML = ``
    document.getElementById("nome").value = ``
    document.getElementById("img").value = ``
}