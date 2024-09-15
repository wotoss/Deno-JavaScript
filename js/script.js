
//1 - Temos que referenciar o input
//pegando um input onde o name seja tarefa.
let input = document.querySelector('input[name=tarefa]');
//tirando a prova do input - vamos imprimir na tela
//console.log(input);

//2 - Temos que referenciar o button
//vou pegar pelo (id) lembrando que o (id - identifica um unico elemento).
let btn = document.querySelector('#botao');

//3 - Temos que referenciar o lista
// vamos bucar a lista por um identificado (id - lista)
let lista = document.querySelector('#lista');

//recuperação de card - global
let card = document.querySelector('.card');

//estamos fazendo a busca do aramazenamento do banco de dados no localStorage.
/*
  estamos falando ! - Java script tenta acessar o banco de dados localStorage procura
  pelo (bd -  tarefas) se achar transforma em array e coloca na (variavel tarefas).
  caso você não ache coloca do valor no array como um array [] (vazio).
*/
let tarefas = JSON.parse(localStorage.getItem('tarefas') || []);


//criar uma function para (interar e addicionar na pagina)
function renderizarTarefas() {
      //Limpar a listagem de itens antes de renderizar novamente a tela
      lista.innerHTML = '';

   //vamos interar tarefas - pelo for
   for(tarefa of tarefas) {
      //criar o item da lista
      let itemLista = document.createElement('li');
      //Adicionar classes no item  da lista
      itemLista.setAttribute('class', 'list-group-item list-group-item-action');
      //Criar um texto que será item da lista.

      //Adicionar classes no item da lista
      itemLista.onclick = function() {
      //this - (nome-item) da lista que esta vindo.   
         deletarTarefa(this);
      }
      let itemTexto = document.createTextNode(tarefa);
      //vamos usar o appendChild -  vamos adicionar um filho.
      itemLista.appendChild(itemTexto);
      //Adicionar o item da lista na lista
      lista.appendChild(itemLista);

   }
}

//Executando a função para renderizar as tarefas.
renderizarTarefas();

// a- Nós precisamos escultar o evento de click do botão.
btn.onclick =  function() {
// b- Precisamos (capturar / recuperar) o valor digitado pelo usuário no input.
let novaTarefa = input.value;
  if (novaTarefa !== "") {
   // c- Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela.
   // neste momento eu faço a adição de tarefas no meu array
   tarefas.push(novaTarefa);
   //Executando a função para renderizar as tarefas - atualizar a lista.
   renderizarTarefas();
   //Limpar o input
   input.value = '';

   //Toda vez que eu adicionar um novo elemento eu removo o span
   removerSpans();
   //salva os novos dados no banco de dados
   salvarDadosNoStorage();
   } else {
      //Toda vez que eu adicionar um novo elemento eu removo o span
       removerSpans();
      
      let span = document.createElement('span');
      span.setAttribute('class', 'alert alert-warning');

      let msg = document.createTextNode('Você precisa informar a tarefa!');
      //preciso adicionar esta mensagem com filho de span..
      span.appendChild(msg);
      //por fim eu preciso adicionar o (span no card)
      //o span passa a ser filho card
      card.appendChild(span);
      
   }
}

//remover os spans
function removerSpans() {
   //recuperar todos o "span" - são as mensagens de erros
   let spans = document.querySelectorAll('span');
   //recuperar o card - os span são filhos de card
   
   //ele percorre a lista de spans e (remove-spans)
   for (let i = 0; i < spans.length; i++) {
      card.removeChild(spans[i]);
   }
}


//Receber uma tarefa para ser removida.
function deletarTarefa(tar) {
   //remove a tarefa do array - veja splice tira 1 do array.
   tarefas.splice(tarefas.indexOf(tar.textContent), 1);
   //renderiza novamente a tela.
   renderizarTarefas();
   //salva os novos dados no banco de dados
   salvarDadosNoStorage();
}

//salvar dados no storage
function salvarDadosNoStorage() {
   /*
     Todo navegador web possui esta capacidade
     vamos armazenar dados - no storage nossa base de dados local.

     com setItem - nós criamos o nosso banco de dados no navegador
   */
   localStorage.setItem('tarefas', JSON.stringify(tarefas));

}





