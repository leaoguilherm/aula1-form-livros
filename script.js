function btnCadastrar() {
    if (validacao()) {
    const titulo = coletarInputs("inputTitulo")
    const descricao = coletarInputs("inputDescricao")
    }
}

function coletarInputs(entradaInput) {
    const valorInput = document.getElementById(entradaInput).value;

    return valorInput
}

function validacao() {
    const validacaoTitulo = document.getElementById("inputTitulo").value
    const validacaoDescricao = document.getElementById("inputDescricao").value

    if (validacaoTitulo == "") {
        const resultado = document.getElementById("conteinerResultado")
        resultado.innerHTML = "Formulário inválido: Digite o título do livro."
        resultado.style.display = "block"
        resultado.style.backgroundColor = "red"

        return false
    }
    
    if (validacaoDescricao == "") {
        const resultado = document.getElementById("conteinerResultado")
        resultado.innerHTML = "Formulário inválido: Digite a descrição do livro."
        resultado.style.display = "block"
        resultado.style.backgroundColor = "red"
        
        return false
    }
    
    if (true) {
        const resultado = document.getElementById("conteinerResultado")
        resultado.innerHTML = "Enviado com sucesso!"
        resultado.style.display = "block"
        resultado.style.backgroundColor = "#207868"
    }
    
}