/*
Exercicio 

1. False
   False
   true
   boolean


2. 
 Tem que transformar a string em numero para que se tenha a 
 soma de forma correta 
 
3. let primeiroNumero = prompt("Digite um numero!")
      primeiroNumero = Number(primeiroNumero)
   let segundoNumero = prompt("Digite outro numero!")
      segundoNumero = Number(segundoNumero)

      const soma = primeiroNumero + segundoNumero

      console.log(soma)
 
 
 */

// 1. Questão

/* let idadeUsuario = prompt("Qual a sua idade ?")
idadeUsuario = Number(idadeUsuario)
let idadeAmigo = prompt("Qual a idade do seu Amigo ?")
idadeAmigo = Number(idadeAmigo)

let comparaIdade = idadeUsuario > idadeAmigo
console.log(comparaIdade)

let diferencaIdade = idadeUsuario - idadeAmigo
console.log(diferencaIdade)
*/

// 2. Questão
/*
let par = prompt("Digite um numero par")
restoPar = par % 2
console.log(restoPar)

// Item c : O padrão e que o resto da divisão sempre é Zero

// Item d : O resto será 1 pois será um numero impar

*/

// 3. Questão

/*
let idade = prompt("Digite a sua idade ?")

let idadeMes = idade * 12

console.log("Sua idade em meses :",idadeMes)

let idadeDias = idade * 365

console.log("Sua idade em Dias :",idadeDias) 

let idadeHoras = idade * 8760

console.log("Sua idade em Horas :",idadeHoras)
*/


// 4. Questão

let primeiroNumero = prompt("Digite o primeiro numero" )
    primeiroNumero = Number(primeiroNumero)
let segundoNumero = prompt("Digite o segundo numero" )
    segundoNumero = Number(segundoNumero)

let primeiroNumeroMaior = primeiroNumero > segundoNumero
console.log("O primeiro numero é maior que segundo?",primeiroNumeroMaior)

let primeiroNumeroIgual = primeiroNumero === segundoNumero
console.log("O primeiro numero é igual que segundo?",primeiroNumeroIgual)

let restoDivisao = primeiroNumero % segundoNumero
let teste = restoDivisao === 0
console.log("Primeiro numero é divisivel pelo segundo ?",teste)

restoDivisao = segundoNumero % primeiroNumero
teste = restoDivisao === 0
console.log("Segundo numero é divisivel pelo primeiro ?",teste)








