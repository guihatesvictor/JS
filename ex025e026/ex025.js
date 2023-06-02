var cadastro = []

function exibirDados() {
    document.getElementById(`resultados`).innerHTML = ``
    for (var i in cadastro) {
        document.getElementById(`resultados`).innerHTML +=
            `<h3>Nome: ${cadastro[i].nome} - Login: ${cadastro[i].usuario}</h3>`
    }
}

cadastro = JSON.parse(localStorage.getItem('bdCadastro'))
if (cadastro == null) {
    cadastro = []
}

exibirDados()

function validarCadastro(name, user, password, confirmpassword) {
    if (password != confirmpassword) {
        alert("As senhas não correspondem")
    }
}

function botaoCadastro() {
    var name = document.getElementById("name").value
    var user = document.getElementById("user").value
    var password = document.getElementById("password").value
    var confirmpassword = document.getElementById("confirmpassword").value

    var possoCadastrar = validarCadastro(name, user, password, confirmpassword)

    var dados = {
        nome: name,
        usuario: user,
        senha: password,
        confirmarsenha: confirmpassword
    }

    cadastro.push(dados)
    localStorage.setItem("bdCadastro", JSON.stringify(cadastro))

    exibirDados()

    document.getElementById("name").value = ""
    document.getElementById("user").value = ""
    document.getElementById("password").value = ""
    document.getElementById("confirmpassword").value = ""
}

function exibirDados(){
    document.getElementById(`resultados`).innerHTML = ``

    cadastro.forEach((item, indice) => {
        document.getElementById(`resultados`).innerHTML +=
            `<h3>Nome: ${item.nome} - Login: ${item.usuario}</h3>
             <img src= 'excluir.svg' onclick= 'excluirUsuario(${indice})'>`
    })
}

function botaoLimparCadastros() {
    cadastro = []
    localStorage.setItem("bdCadastro", JSON.stringify(cadastro))
    document.getElementById(`resultados`).innerHTML = ``
}

function excluirUsuario(indice) {
    cadastro.splice(indice, 1)
    localStorage.setItem("bdCadastro", JSON.stringify(cadastro))
    exibirDados()
}