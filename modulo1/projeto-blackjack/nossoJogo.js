/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    
console.log('Boas vindas ao jogo de Blackjack!')


   if(confirm('Vamos jogar ?sim ou não ')){
       
      const carta = comprarCarta();
      
      for(let i=0; i<2 ; i++){ 
      
      let carta1DoUsuario = carta.valor
      

       console.log(carta.texto)
       console.log(carta1DoUsuario)
      }
      for(let i=0; i<2 ; i++){ 
      
         let carta2DoUsuario = carta.valor
         
   
          console.log(carta.texto)
          console.log(carta2DoUsuario)
         }  

    }else{
       console.log('O jogo acabou')
    }

