function botaoMedia() {
    var nm = document.getElementById("nome").value

    var nt1 = document.getElementById("nota1").value
    var nt2 = document.getElementById("nota2").value

    var valido = validarNota(nt1, nt2)

    if (valido == false) 
    {
        return
    }

    var media = calcularMedia(nt1, nt2)

    exibirAprovacao(media, nm, nt1, nt2)

}

function validarNota(nt1, nt2) {
    if (nt1 > 10) {
        alert("A nota 1 não pode ser maior que 10")
        return false
    }

    if (nt2 > 10) {
        alert("A nota 2 não pode ser maior que 10")
        return false
    }
}

function calcularMedia(nt1, nt2) {
    var media = (Number(nt1) + Number(nt2)) / 2
    return media
}

function exibirAprovacao(media, nm, nt1, nt2) {
    if(media >= 7)
    document.getElementById("resultados").innerHTML +=
        ` O aluno ${nm} tirou nota ${nt1} e ${nt2}, sua média foi ${media}`
    if (media >= 7) {
        document.getElementById("passou").innerHTML =
            `Aprovado`
    } else {
        document.getElementById("passou").innerHTML =
            `Reprovado`
    }
}