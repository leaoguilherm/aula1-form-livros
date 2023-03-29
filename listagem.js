

//ADICIONANDO O EVENTO DE CLICK NO BOTÃO AO CARREGAR A PAGINA.
window.addEventListener("load", () => {
    const elemento = document.getElementById("idBuscarLivros")

    elemento.addEventListener("click", buscarLivros)
})


//FUNÇÃO QUE IRÁ EXECUTAR A TAREFA APÓS O CLICK.
async function buscarLivros() {
    const retornoApi = await buscarNaApi()

    listarTabela(retornoApi)
    mostrarLivros("conteinerTabela")

}

async function buscarNaApi(){
    const url = `https://target-api-simples.cyclic.app/livros`

    const response = await fetch(url)
    const responseData = await response.json()
    
    return responseData
}

function listarTabela(array) {
    //Total de livros cadastrados.
    const elementoTotalDeLivros = document.getElementById("totalLivros")
    elementoTotalDeLivros.innerText = array.length + " Livros cadastrados."

    //Pegando elemento corpo da tabela.
    const elementoTabela = document.getElementById("tbody")
    elementoTabela.innerText = ""

    //Looping para mostrar a tabela com os dados da API.
    for (let index = 0; index < array.length; index++) {
        const criarLinhaTabela = elementoTabela.insertRow();
        
        const tdId = criarLinhaTabela.insertCell();
        const tdTitle = criarLinhaTabela.insertCell();
        const tdDescription = criarLinhaTabela.insertCell();

        tdId.innerText = array[index].id;
        tdTitle.innerText = array[index].title;
        tdDescription.innerText = array[index].description;

        
    }
}

function mostrarLivros(idElemento) {
    const elemento = document.getElementById(idElemento)

    elemento.style.display = "block"
}