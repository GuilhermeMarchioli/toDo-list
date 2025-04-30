// Variáveis
var tarefas = []
var msg = document.getElementById('msg')
msg.innerText ='Tarefa adicionada com sucesso'

var inputTarefa = document.getElementById('inputTarefa')
var lista = document.getElementById('lista')


//Adicionar a tarefa 
function adicionarTarefa() {
    let tarefa = inputTarefa.value.trim();

    if(tarefa < 3 ) {
        msg.style.color = "darkRed"
        msg.innerText = "O item não foi adicionado a lista"
        window.alert('É necessário pelo menos 3 caracteres para ser adicionado a lista.')
    } else {
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value =""
}

//Renderizar Tarefas
function renderizarTarefas() {
    lista.innerHTML = ""

    for(let i = 0; i < tarefas.length; i++) {
        let li = document.createElement('li')
        li.innerText = tarefas[i]
        lista.appendChild(li)
    }
}