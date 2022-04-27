/*
] 
 a. matheus Nastergaele
    Virginia Cavendish
    canal: Globo, horario: 14h  
  
2] 
  a. nome: Juca
     idade: 3
     raca: SRD
    
     nome: Juca, Juba
     idade: 3
     raca: SRD

     nome: Juco, Jubo 
     idade: 3
     raca: SRB  

   

  b. ela vai copia e replicar o objeto que foi selecionado  

3]
 a.  False
    underfine
   
  b. Retornou false pois e o boleano armazenado no backender detro do objeto  pessoa
     retornou underfine pois não temos essa categoria dentro do objeto 



*/


// 1 questão escrita 


const nomeApelido ={
   nome : 'João Paulo',
   apelido : ['Jo', 'jão', 'Jojo'] 

}
function imprimeNomeApelido(recebe){

    let recebeParaImprimir = console.log(`Eu sou ${recebe.nome}, mas pode me chamar de: ${recebe.apelido[0]}, ${recebe.apelido[1]} ou ${recebe.apelido[2]}`)
    
    return recebeParaImprimir
}
//itea A.
console.log(imprimeNomeApelido(nomeApelido))

const copiaNomeApelido = {
    ... nomeApelido,
    apelido: ['jj','paulinho', 'jr']
}

console.log(imprimeNomeApelido(copiaNomeApelido))



//2 questão

const dados1 = {
nome:'Linhares' ,
idade: 29,
profissao: 'Estudante' 

}
const dados2 = {
    nome: 'Braga',
    idade: 18,
    profissao: 'Tecnico de TI' 
    
    }


function recebeDados(dados){
   
   let retornoDeDados = [dados.nome, dados.nome.length, dados.idade, dados.profissao, dados.profissao.length ]
    return retornoDeDados
}
 
console.log(recebeDados(dados1))
console.log(recebeDados(dados2))


// 3 questão

let carrinho =[]

const fruta1 ={
    nome:'banana',
    disponibilidade: true
}


const fruta2 ={
    nome:'maça',
    disponibilidade: true
}


const fruta3 ={
    nome:'mamão',
    disponibilidade: false
}

function recebeFruta(frutas) {
 
let a = carrinho.push(frutas)
return a
}
console.log(recebeFruta(fruta1))
console.log(recebeFruta(fruta2))
console.log(recebeFruta(fruta3))