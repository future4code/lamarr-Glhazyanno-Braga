/* 1 
     a. underfine
     b. null
     c. 11
     d. 0
     e. 19 
     f. 6

    2 
      SUBI NUM ONIBUS EM MIRROCOS
      27

   */


//questão1 


let nomeDoUsuario = prompt ("Digite seu nome")
let emailDoUsuario = prompt("Digite seu email")

console.log(` O email ${nomeDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario} `)

//questão2 

let listaComidas = ["figado","feijoado","arroz","doce","melancia"]

console.log (listaComidas)
console.log("Essas são minhas comidas favoritas")
console.log (listaComidas[0])
console.log (listaComidas[1])
console.log (listaComidas[2])
console.log (listaComidas[3])
console.log (listaComidas[4])


let comidaFav = prompt("Diga um comida")

listaComidas[2] =comidaFav

console.log(listaComidas)

// 3 questão

let listaTarefas = []
let tarefaP = prompt('diga a Primeira tarefa')
let tarefaS = prompt('diga a segunda tarefa')
let tarefaT = prompt('diga a terceira tarefa')

listaTarefas.push(tarefaP , tarefaS , tarefaT )

console.log(listaTarefas)

let indice = prompt('diga o indice de 0 a 2')
 indice = Number(indice)

listaTarefas.splice(indice,1)

console.log(listaTarefas)

