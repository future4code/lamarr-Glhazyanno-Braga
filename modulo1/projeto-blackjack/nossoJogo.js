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

    console.log('Boas vindas ao jogo de Blackjack')

    if(confirm("Quer iniciar uma nova rodada")){

        const carta = comprarCarta(); 

          
       
          let usuario1Carta = comprarCarta()
          let usuario2Carta = comprarCarta()
          let computador1Carta = comprarCarta()
          let computador2Carta = comprarCarta()
          
          let somaCartaUsuario = usuario1Carta.valor + usuario2Carta.valor
          let somaCartaComputador = computador1Carta.valor + computador2Carta.valor

         
  
          console.log(comprarCarta()) 

          console.log(comprarCarta()) 

          console.log(`Usuario - cartas ${usuario1Carta.texto} ${usuario2Carta.texto} - pontuação ${somaCartaUsuario} `)
          console.log(`Computador - cartas ${computador1Carta.texto} ${computador2Carta.texto} - pontuação ${somaCartaComputador} `)
 
              if(somaCartaComputador < somaCartaUsuario ){
                  console.log('O usuário ganhou!')   }           
                   
                  if (somaCartaComputador > somaCartaUsuario) {
                      console.log('O computador ganhou!')
                 
                       } 
                       if(somaCartaComputador === somaCartaUsuario) {
                        console.log('Empate')
   
                           }
               

          // Computador 
          

    }else{
       console.log("O jogo acabou")
    }