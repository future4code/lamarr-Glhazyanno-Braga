// 1 a) 
//let minhaString: string = "10"
//minhaString = 10

// Não é possivel adicionar um number pois variavel minhaStrig já está tipada como string

//1 b) 

let meuNumero:number | string = 25
meuNumero = "tipo numero"
meuNumero = 8

// colocando o ou podemos colocar tipar uma variavel com mais tipos

//1 c) e d)

type Pessoa ={
    nome: string,
    idade: number,
    corFavorita : string
} 





const pessoa1: Pessoa = {
  nome : "josé",
  idade : 10,
  corFavorita : "Amarelo"


}
const pessoa2: Pessoa = {
    nome : "jo",
    idade : 81,
    corFavorita : "azul"
  
  
  }

const pessoa3: Pessoa = {
    nome : "Pedro",
    idade : 50,
    corFavorita : "roxo"
  
  
  }     

enum arcoIris{
    AZUL= "azul",
    AMARELO="amarelo",
    VERMELHO="vermelho",
    LARANJA="laranja",
    VERDE="verde",
    VIOLETA="violeta"
}

const pessoa4: Pessoa = {
    nome : "ze",
    idade : 85,
    corFavorita : arcoIris.LARANJA
  
  
  }