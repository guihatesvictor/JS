var listaFilmes = []
listaFilmes = JSON.parse(localStorage.getItem("bdFilmes"))
if (listaFilmes == null) {
    listaFilmes = []
}

console.log(listaFilmes)


function botaoFilmes() {

    var nomeFilme = document.getElementById("nome").value
    var imagemFilme = document.getElementById("img").value


    var filme = {
        nome: nomeFilme,
        link: imagemFilme
    }

    listaFilmes.push(filme)
    localStorage.setItem("bdFilmes", JSON.stringify(listaFilmes))

    document.getElementById(`resultados`).innerHTML = ``

    for (var i in listaFilmes) {
        document.getElementById(`resultados`).innerHTML +=
            `<img src="${listaFilmes[i].link}">
              <p>${listaFilmes[i].nome}</p>`

    }

}


function botaoSortear() {
    var nrSorteado = parseInt(Math.random() * listaFilmes.length)

    document.getElementById("resultados").innerHTML =
        `
            <img src = "${listaFilmes[nrSorteado].link}"
        `
}


function botaoLimpar() {
    document.getElementById("resultados").innerHTML = ``
    document.getElementById("nome").value = ``
    document.getElementById("img").value = ``
}


function exibirFilmes() {
    for (var i in listaFilmes) {
        document.getElementById(`resultados`).innerHTML +=
            `<div>
                  <img src="${listaFilmes[i].link}">
                  <p>${listaFilmes[i].nome}</p>
            </div>`
    }
}


function botaoLimparCadastros() {
    listaFilmes = []
    localStorage.setItem("bdFilmes", JSON.stringify(listaFilmes))
}