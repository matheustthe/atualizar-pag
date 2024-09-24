document.getElementById("neymarButton").addEventListener("click", addtarefa)


// inicializar uma lista vazia

let listatarefas = JSON.parse(localStorage.getItem("tarefas")) || []

//verificar se existe uma lista no local storage

// fazer um laço for pra cada tarefa, chamar a função addTarefa
listatarefas.forEach(element => {
    criarElemento(element)
});

// quando add uma tarefa, add no local storage também

// quando remover uma tarefa, remover do local storage também



function addtarefa(){
    // pegar o valor de dentro do input e armazenar em uma variavel
    const inputTarefa = document.getElementById("neymarInsira").value 

    // verificar o valor do input e dar um alert se estiver vazio
    if (!inputTarefa) {
        alert("o input esta vazio")
        return
    }
// adiciona tarefa no array de tarefas
    listatarefas.push(inputTarefa)
// transforma a array em string e coloca a lista de tarefas no local storage
    localStorage.setItem("tarefas", JSON.stringify(listatarefas))

    criarElemento(inputTarefa)
}

function criarElemento(inputTarefa) {
        // criar o elemento <li>
        const elemento_tarefa = document.createElement("li")
        elemento_tarefa.className = "item_tarefa"
    
        //adicionar o texto do input no novo <li>
        const conteudoTarefa = document.createElement("p")
        conteudoTarefa.textContent = inputTarefa
        
        //adicionar um botão para deletar tarefa no novo <li>
        const botaoDeletar = document.createElement("button")
        botaoDeletar.textContent = "deletar Tarefa"
        botaoDeletar.addEventListener("click", () => {
            elemento_tarefa.remove()
        // filtra a tarefa a ser removida
            listatarefas = listatarefas.filter((tarefa) => tarefa !== inputTarefa)
        // salva novamente a lista de tarefas no local storage
            localStorage.setItem("tarefas", JSON.stringify(listatarefas))
        
        })
    
        //adicionar um botão para completar a tarefa no <li>
        const botaoCompletar = document.createElement("button")
        botaoCompletar.textContent = "Completar Tarefa"
        botaoCompletar.addEventListener("click", () => {
          conteudoTarefa.classList.toggle("completada")  
        })
    
        //adicionar o novo elemento <li> a tag <ul>
        elemento_tarefa.appendChild(conteudoTarefa)
        elemento_tarefa.appendChild(botaoDeletar)
        elemento_tarefa.appendChild(botaoCompletar)
        document.getElementById("neymarLista").appendChild(elemento_tarefa)        
}
