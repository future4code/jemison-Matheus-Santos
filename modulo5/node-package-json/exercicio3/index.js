const listaDeTarefas = ["Estudar lógica"];

const novaTarefa = process.argv[2];

const receberTarefa = (tarefa) => {
   const novaLista = [...listaDeTarefas, tarefa];

   return novaLista;
};

console.log(receberTarefa(novaTarefa));
