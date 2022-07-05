
/*  Interpretação de codigo
  1] 

   enquanto o i for menor que 5 será acesentado 1 ao valor será impresso o seguinte

   0
   1
   2
   3
   4

   2] 
   a.
     19
     21
     23
     25
     27
     30
   b.
     Sim, pois o for ... of... percorre toda a lista
     para acessar e imprimir cada item bastava o numero > 9
  3.
       *
       **
       ***
       ****

*/



// Para Codar
//Questão 1 

let quantidadeBichinhos = Number(prompt('Diga quantos bichinhos você tem ?'))
if(quantidadeBichinhos === 0){
    
console.log('Que pena! Você pode adotar um pet!')
    }


else{
    let bichinhos = []
    for(let i = 0; i < quantidadeBichinhos ; i++){
        bichinhos[i] = prompt('Diga o nome do seu pet')
        
        console.log(bichinhos[i])
        

      }
    }
//Questão 2
//a
let arrayOriginal = [1,20,3,4,50,6,7,8,9,10]
 
function imprimeNumeros(array) {
    
    for(let i of array ){
        
        console.log(i)

    }
}
   console.log(imprimeNumeros(arrayOriginal))

 //b
  function dividePor10(array10) {
      for(let i of array10){
            
          //arrayOriginal[i / 10] 
         
        console.log(i/10)  
      }
        
  } 

  console.log(dividePor10(arrayOriginal))

  //c

  function retornaPares(arrayPares) {
      let arrayPar =[]
      for (let i = 0; i < arrayPares.length ; i++ ){
           if (arrayPares[i] % 2 === 0){
               arrayPar.push(arrayPares[i])
           }  

        }
          console.log(arrayPar)
    }

  console.log(retornaPares(arrayOriginal))
  //d
  
  function retornaIndex(arrayIndex) {
      
    
    for(let j = 0; j < arrayIndex.length ;j++){
        
        console.log(`O elemento do index ${j} é ${arrayIndex[j]} `)  
         
    }
}

console.log(retornaIndex(arrayOriginal))

  //e

  function NumeroMenorMaior(arrayMenorMaior){
    
        let valorMaximo = 0
        for( let i = 0 ; i < arrayMenorMaior.length ; i++ ){ 
            let numero = arrayMenorMaior[i] 
                   if( numero > valorMaximo ){ 
                           valorMaximo= numero  
            }
        }
        let valorMinimo = valorMaximo
        for( let i = 0 ; i < arrayMenorMaior.length ; i++ ){ 
            let numero = arrayMenorMaior[i] 
                   if( numero < valorMinimo ){ 
                           valorMinimo= numero  
            }
        }
        
        
        return `o maior numero é ${valorMaximo} e o menor valor é ${valorMinimo}`

        
  }

        

  console.log(NumeroMenorMaior(arrayOriginal))