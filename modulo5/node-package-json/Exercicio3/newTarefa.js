import{listTarefas} from "./list.js"

const novaTarefa = process.argv[2]


listTarefas.push(novaTarefa)

console.table(listTarefas)
