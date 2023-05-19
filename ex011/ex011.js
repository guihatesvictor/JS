function botaoEntrar() {
    var nm = document.getElementById("nome").value
    var idd = document.getElementById("idade").value

    if (idd >= 18 && idd <= 70) {
        document.getElementById("resultados").innerHTML +=
            ` ${nm}, você é obrigado a votar`
    } else if (idd < 16) {
        document.getElementById("resultados").innerHTML =
            ` ${nm}, você não pode votar`
    } else {
        document.getElementById("resultados").innerHTML =
        ` ${nm}, você pode votar, mas não é obrigado`
    }
}