function botaoVerificar() {
    var nm = document.getElementById("nome").value

    var idd = document.getElementById("idade").value

    if (idd >= 18) {
        document.getElementById("resultados").innerHTML +=
            ` PARABÉNS  ${nm}, você pode tirar a CNH :)`
        document.getElementById("passou").innerHTML =
            `<img src="/CNH-Perguntas-e-Respostas-Frequentes (1).jpg">`
    } else {
        document.getElementById("resultados").innerHTML +=
            ` Espere seus 18 anos para tirar a CNH :(`
        document.getElementById("passou").innerHTML =
            `Reprovado`
    }
}