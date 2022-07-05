// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
  function compararNumeros(a, b) {
    return a - b;
  }
  return array.sort(compararNumeros)
  }

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
 const numerosPar = array.filter((numeros,indice,arrays) => {
   return numeros % 2 === 0
 })
  return numerosPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numerosPar = array.filter((numero,indice,arrays) => {
    return numero % 2 === 0
  })
  let numerosParElevado2 = numerosPar.map((numero,indice,arrays) => {
    return numero * numero
  })
  return numerosParElevado2

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
 let maiorNumero = Math.max(...array);
 return maiorNumero
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
const maiorNumero = Math.max(num1 , num2)
const menorNumero = Math.min(num1 , num2)
const maiorDivisivelporMenor = maiorNumero % menorNumero === 0
const diferenca = maiorNumero - menorNumero

let objeto = {
      maiorNumero: maiorNumero,
      maiorDivisivelPorMenor: maiorDivisivelporMenor,
      diferenca: diferenca  
}

return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
 /* let numerosPar = array.filter((numero,indice,arrays) => {
    return numero % 2 === 0
  })
  let numerosParIndice = numerosPar.filter((numero,indice,arrays) => {
    return 
  })
  return numerosParElevado2   */
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
let triangulo
  if( ladoA === ladoB && ladoA === ladoC){
 triangulo = 'Equilátero'
}
 else if (ladoA === ladoB && ladoA != ladoC){

  triangulo = 'Isósceles'
}
else if (ladoA != ladoB && ladoA === ladoC){

  triangulo = 'Isósceles'
}
else if (ladoA != ladoB && ladoA != ladoC && ladoB === ladoC){

  triangulo = 'Isósceles'
}
else {
  triangulo = 'Escaleno'
}
return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let maiorNumero = Math.max(...array);
  let menorNumero = Math.min(...array);
  let arraySemMaior = array.filter((numero,indice,arrays) => {
    return numero < maiorNumero 
  })
  let arraySemMenorEMaior = arraySemMaior.filter((numero,indice,arrays) => {
    return numero > menorNumero
  })
  

  
  let segundoMaiorNumero = Math.max(...arraySemMenorEMaior);
  let segundoMenorNumero = Math.min(...arraySemMenorEMaior);

  if(array.length < 3){
    segundoMaiorNumero = menorNumero
    segundoMenorNumero = maiorNumero
  }
  let arraySegundoMaiorMenor = [segundoMaiorNumero , segundoMenorNumero]
  return arraySegundoMaiorMenor

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   filme.atores.join( )
   return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let pessoaAnonima = {
     ...pessoa ,
     nome: 'ANÔNIMO'
   }
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasPermitidas = pessoas.filter((pessoa,indice,array) =>{
    return pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60
  }
  ) 
  return pessoasPermitidas
  //pessoas.altura > 1.5 && pessoas.idade > 14 && pessoas.idade < 60
 

  
   

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoPermitidas = pessoas.filter((pessoa,indice,array) =>{
    return pessoa.altura < 1.6 || pessoa.idade < 15 || pessoa.idade > 59
  }
  ) 
  return pessoasNaoPermitidas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

//let contaAtualiza = contas.map((pessoa,indice,array) =>{
//compras.pessoa

//})  

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function (a, b) {
	
    return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
   
  });

 return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
 
  consultas.sort(function (a, b) {
	
    return (a.dataDaConsulta > b.dataDaConsulta) ? 1 : ((b.dataDaConsulta > a.dataDaConsulta) ? -1 : 0);
   
  });

 return consultas
  // function ordemCrescente(a, b) {
   // return b.dataDaConsulta < a.dataDaConsulta;
 // }

  //return consultas.sort(ordemCrescente)
   
}