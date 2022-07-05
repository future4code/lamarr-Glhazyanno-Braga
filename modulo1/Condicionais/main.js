

/*  Aqui a baixo está as questões
  
/*1] 

a. verifica se o numero divisivel por 2 caso sim ele imprime valor:
Passou no teste
Caso não seja par ele imprime:
Não passou no teste

b. imprime numers Par

c. impime numeros Impar

2]

a. Ele recebe um fruta digitada pelo o usario  vai ser verificado pelo o codico e
assim que encontra a fruta digitada ele para e imprime a fruta com valor

b. O preço da fruta maçã é R$ 2.25

c. O preço da fruta pera é R$ 5.00

3] 

a.  Está solcitado que seja digitado um numero
b. caso seja digitado 10 será impresso :Esse numero passou no teste
caso seja digitado - 10 será impresso : não será exibido nada
c. Haverá um erro pois o let mesangem está endentado do forma incorreta 

if(numero > 0) {
  console.log("Esse número passou no teste")
	else{
        let mensagem =console.log("Essa mensagem é secreta!!!")
}
}

    

*/



// Exercicico Para Codar
//Questão 1 

let idade = Number(prompt('Diga a sua idade'))

if(idade >= 18){
    console.log("você pode dirigir")
}else{
    console.log("voce não pode dirigir")
}

//Questão 2

let turno = prompt('Diga o seu turno ele deve ser M , D ou N')

if(turno === 'M'){
 console.log('Bom dia')
}
  
if(turno === 'D' ){
 console.log("Boa tarde")
}

if(turno === 'N')
 console.log('Boa Noite')   

else{
    console.log('Digite M, D ou N')
}
// 3 questão

let turnoCase = prompt('Diga o seu turno ele deve ser M , D ou N')


switch(turnoCase){
    case 'M' :
         console.log('Bom dia')
         break    
  
    case 'D' :
          console.log("Boa tarde")
         break

    case 'N' :
          console.log("Boa noite ")
          break     
     default :
          console.log('Digite M,D ou N')        
          break
}
// 4 questão

let genero = prompt('Diga o genero do filme:') 
let valorIngresso = Number(prompt('Diga o preço do ingresso:'))   

if(genero === 'fantasia' && valorIngresso < 15){

console.log('Bom filme')
    }
    else {
        console.log('Escolha outro filme :(')
    }

