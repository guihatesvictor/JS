function botaoMedia() {
    var nm = document.getElementById("nome").value

    var nt1 = document.getElementById("nota1").value
    var nt2 = document.getElementById("nota2").value

    var calculo = (Number(nt1) + Number(nt2)) / 2

    if (nt1 > 10) {
        alert ("A nota 1 não pode ser maior que 10")
        return
    }

    if (nt2 > 10) {
        alert ("A nota 2 não pode ser maior que 10")
        return
    }

    document.getElementById("resultados").innerHTML +=
        ` O aluno ${nm} tirou nota ${nt1} e ${nt2}, sua média foi ${calculo}`
    if (calculo >= 7) {
        document.getElementById("passou").innerHTML =
            `Aprovado`
    } else {
        document.getElementById("passou").innerHTML =
            `Reprovado`
    }
}