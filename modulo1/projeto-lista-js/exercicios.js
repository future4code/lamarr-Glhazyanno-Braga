// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let  altura  =  prompt ( "Digite a altura:" )
       altura  =  Number(altura)
let  largura  =  prompt ( "Digite a largura:" )
     largura  =  Number(largura)

const  areaRetangulo  =  altura  *  largura 
return console.log(areaRetangulo)

 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let  anoAtual  =  prompt ("Digite o ano atual:")
       anoAtual  =  Number(anoAtual)

let    anoNasc  =  prompt ("Digite o ano atual:")
       anoNasc  =  Number(anoNasc)



const  idadeAtual  =  anoAtual  -  anoNasc
return console.log (idadeAtual)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 peso = Number(peso)
 altura = Number(altura)
   let  al = altura * altura  
   let calImc = peso / al
 
return calImc


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 let nome = prompt('Diga seu nome')
 let idade = prompt ('Diga sua idade')
 let email = prompt ('Diga seu email')


 let a = console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
 return a


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  let cor1 = prompt('Diga sua Primeira cor favorita')
  let cor2 = prompt ('Diga sua Segunda cor favorita')
  let cor3 = prompt ('Diga sua Terceira cor favorita')

const listaCor = [cor1 , cor2 , cor3]
const imprimeLista = console.log(listaCor)
return imprimeLista

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 let letramaiuscula = string.toUpperCase()
 
 return letramaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  let sempreju = custo / valorIngresso
  return sempreju
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  
  
  let compara = string1.length === string2.length
  return compara

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
let retornaUm = array[0]
return retornaUm
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let retornaUltimo = array.pop()
return retornaUltimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroArray = array[0]
      array.slice(0,1)
  let ultimoArray = array.pop()
      array.push(primeiroArray)
      array[0] = ultimoArray

   
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let frase1 = string1.toUpperCase()
  let frase2 = string2.toUpperCase()

  let compara = frase1 === frase2

  return compara
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
 /* let anoAtual = prompt('Diga o ano atual')
  let anoNascUsuario = prompt ('Diga o ano de nascimento do usaurio')
  let anoEmissao = prompt ('Diga o ano de Emissão da carteira')

  let idade = anoAtual - anoNascUsuario
  
  idade <= 

*/

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}