function botaoEntrar() {
    var nm = document.getElementById("nome").value
    var sen = document.getElementById("senha").value

    if (nm == "adm" && sen == "123") {
        document.getElementById("resultados").innerHTML +=
            ` Você entrou!`
    } else {
        document.getElementById("resultados").innerHTML =
            `Usuário ou senha incorretos`
    }
}