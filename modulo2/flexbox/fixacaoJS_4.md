function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {


  let listaArray = arrayDeNumeros.length
  let contador = 0
  let mensagemQuant = 0
  
  
  for(let i = 0; i < listaArray; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      
      contador = contador + 1 
    }
   
    
  }
  
  if(numeroEscolhido === 3 || contador === 0 ){
   mensagemQuant = `Número não encontrado`
  }
  
  else{
    mensagemQuant = `O número ${numeroEscolhido} aparece ${contador}x`
  }
  
  
  
  
  return mensagemQuant