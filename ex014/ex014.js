function botaoSortear() {

    document.getElementById("resultados").innerHTML = ""

    var sort = parseInt(Math.random() * 60) + 1

    for (let i = 1; i <= 6; i++) {
        var sort = parseInt(Math.random() * 60) + 1
        document.getElementById("resultados").innerHTML +=
            `${sort} `
    }
}