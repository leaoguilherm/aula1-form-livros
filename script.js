async function btnCadastrar() {
    if (validacao()) {
    const titulo = coletarInputs("inputTitulo")
    const descricao = coletarInputs("inputDescricao")

    const resposta = await enviarParaApi(titulo, descricao)
    exibirRetornoEnvio(resposta)
    
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

        return true
    }
    
}

async function enviarParaApi(valor01, valor02) {
    const url = `https://target-api-simples.cyclic.app/livros`

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            title: valor01,
            description: valor02
        })    
    }

    const response = await fetch(url, options)
    const responseData = await response.json()
    
    return responseData
    
}

function exibirRetornoEnvio(respostaEnvio){
    const elemento = document.getElementById("conteinerResultado")
    elemento.innerText = respostaEnvio
}