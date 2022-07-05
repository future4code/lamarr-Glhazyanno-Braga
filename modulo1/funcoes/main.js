

/*  Aqui a baixo está as questões
  
1. Questão
a. 10
   50
b. Não iria ser impresso nada 

2. Questão
 a. Essa função pega o texto e inclui a palavra cenoura em minusculo no final da frase
 b. I
*/




// Exercicico Para Codar
//Questão 1 a.
function imprimeMens(){
   
    // dados = console.log("Eu sou Glhazyanno, tenho 28 anos, moro em Ceará e sou estudante." )
     return 'Eu sou Glhazyanno, tenho 28 anos, moro em Ceará e sou estudante.'
}

console.log(imprimeMens())
//Questão 1 b.

function recebImprime( nome, idade , cidade , profissao) {
let dados = ` Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}. `
return  dados
}

console.log(recebImprime('Duda','21','pires ferreira', 'estudante'))

// Questão 2 a.

function recebe(num1,num2){
  let soma = num1 + num2
  return soma
}

console.log(recebe(8,19))

// Questão 2 b.

function maiorOuIgual(num1,num2){

    let compara = num1 >= num2
    return compara
}
 
console.log(maiorOuIgual(10,11))

// Questão 2 c.

function parOuImpar(num1){

let numeroIgualZero = num1 % 2
let verificaPar = numeroIgualZero === 0 

return verificaPar
}

let resul = parOuImpar(8)

console.log(`O numero é par ${resul}`)

// Questão 2 d.



let teste = tamanhoM("idagiousy doisayodiaoi odiaoidshio ")
  
function tamanhoM(frase) {
   
    
    let mai = frase.toUpperCase()
    let tam = frase.length
    
    return console.log(mai), console.log(tam)
}

console.log(tamanhoM)


function soma(num1,num2) {
    return num1 + num2
}

function subtracao(num1,num2) {
    return num1 - num2
}
function divisao(num1,num2) {
    return num1 / num2
}
function mutiplicacao(num1,num2) {
    return num1 * num2
}



let num1 = prompt("Diga o numero 1")
let num2 = prompt("Diga o numero 2")

num1 = Number(num1)
num2 = Number(num2)


console.log(`Numeros inseridos ${num1} e ${num2}`)
console.log (`Soma: ${soma(num1,num2)}`)
console.log (`subtracao: ${subtracao(num1,num2)}`)
console.log (`divisão: ${divisao(num1,num2)}`)
console.log (`multiplicação: ${mutiplicacao(num1,num2)}`)


