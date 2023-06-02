var nomes = []

var imagens = []

function botaoFilmes() {    

    var filme = document.getElementById("nome").value
    nomes.push(filme)

    var imgs = document.getElementById("img").value
    imagens.push(imgs)

    document.getElementById(`resultados`).innerHTML = ``

    for (var i in filme) {
       // for (var i = 0; i < nomes.length; i++)
        document.getElementById(`resultados`).innerHTML +=
            `${nomes[i]} <br><br> <img src = "${imagens[i]}">`
    }
}

function botaoSortear() {
    var imgSorteado = parseInt(Math.random() * imagens.length)

    document.getElementById("resultados").innerHTML =
        `<div>
            <img src = "${imagens[imgSorteado]}"
        </div>`
}

function botaoLimpar() {
    document.getElementById("resultados").innerHTML = ``
    document.getElementById("nome").value = ``
    document.getElementById("img").value = ``
}