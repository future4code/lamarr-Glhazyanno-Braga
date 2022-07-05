/* 1. 10
      10 5

   2. 10 10 10
   
   3. let horasTrabalhadas ("Quantas horas voce trabalha por dia")
      let dinheiroDiario ("Quanto voce recebe por dia")
      let dinheitoHora = dinheiroDiaria/horasTrabalhadas
      
      alerta ( "Voce recebe" ,dinheiroHora, " por hora"  )

*/
// Questão 1
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)
/* Esse valor nãp está definido pois as variaveis não foram atribuidads a nenhum 
valor seja string, numeral ou bolleano */

let nomeNovo = prompt ("Qual é o seu nome ?")
let idadeNovo = prompt ("Qual a sua idade ?" )


nome = nomeNovo
idade = idadeNovo

console.log(typeof nome)
console.log(typeof idade)

// Ambos os valores retornam uma string

console.log ("Olá",nome, "voce tem",idade, "anos" )

// Questão 2

let corCamisa = prompt(" A cor da sua camisa é azul ? ")
let corSapato = prompt(" A cor do seu sapato é preto ? ")
let corBone = prompt(" A cor do seu bone é roxo ? ")


console.log(" A cor da sua camisa é azul ? " ,corCamisa)
console.log(" A cor do seu sapato é preto ? ",corSapato )
console.log(" A cor do seu bone é roxo ? ",corBone)

//Questão 3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10