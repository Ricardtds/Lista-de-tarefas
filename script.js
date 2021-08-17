onload = function(){
    listaTarefas.innerHTML = localStorage.getItem("Listinha");
}

let campoTexto = document.getElementById('inputTarefa');
let bttAdd = document.getElementById('bt1');
let bttClear = document.getElementById('bt2');
let listaTarefas = document.getElementById('divTarefas')

bttAdd.addEventListener('click',adicionarTarefa);
bttClear.addEventListener('click',limparTarefas);


    //Utilizada para ativar o evento de criação de tarefa com o ENTER
var input = document.getElementById("inputTarefa");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("bt1").click();
  }
});

function adicionarTarefa(){
    if (campoTexto.value == ""){
        alert('Digite a sua tarefa!'); // Verificação se o campo de texto tá preenchido
    } else {
        //Criação da tag listarefa com atribuição de valor html
        let liTarefas = document.createElement('listarefa');
        liTarefas.setAttribute('class','tarefa');
        liTarefas.innerHTML = campoTexto.value;
        listaTarefas.appendChild(liTarefas);

        //Criação do botão e atribuindo-o dentro da tag listarefa criada acima
        let newbutton = document.createElement('input');
        newbutton.setAttribute('type','button');
        newbutton.setAttribute('class', 'listarefabutton button')
        newbutton.setAttribute('value', 'X')
        newbutton.setAttribute("onclick","limparEstaTarefa(this)") // Necessário utilizar este modo, pois o addEventListener não é salvo pelo localstorage!
        liTarefas.appendChild(newbutton);
        salvar();
        campoTexto.value=''; 
    }   
}


function limparTarefas(){
    // Varre todos os filhos da div de tarefas e remove 1 por 1 até esvaziar!
    while (listaTarefas.firstChild) {
        listaTarefas.removeChild(listaTarefas.firstChild);
    }
    localStorage.clear();   
}

function limparEstaTarefa(a){
    // Faz a limpeza da própria tarefa
    a.parentNode.parentNode.removeChild(a.parentNode)
    salvar();   
}

function salvar(){
    // só para salvar no storage
    localStorage.setItem("Listinha",listaTarefas.innerHTML);
}