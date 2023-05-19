function botaoSortear() {

    var nm = document.getElementById("nome").value

    var nrSorteado = parseInt(Math.random() * 12)

    var mes = nrSorteado

    switch (mes) {
        case 1:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Janeiro`
                break
        case 2:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Fevereiro`
                break

        case 3:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Março`
                break

        case 4:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Abril`
                break

        case 5:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Maio`
                break

        case 6:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Junho`
                break

        case 7:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Julho`
                break

        case 8:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Agosto`
                break

        case 9:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Setembro`
                break

        case 10:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Outubro`
                break

        case 11:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Novembro`
                break

        case 12:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, você vai se casar em Dezembro`
                break

        default:
            document.getElementById("resultados").innerHTML =
                ` ${nm}, não você vai se casar`

    }
}