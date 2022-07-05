// Exercícios de interpretação de código

/* 

1]

{ nome: "Amanda Rangel", apelido: "Mandi" } 0 [{nome: "Amanda Rangel", apelido: "Mandi"}{ nome: "Laís Petra", apelido: "Laura" }{nome: "Letícia Chijo", apelido: "Chijo"}]

{nome: "Lais Petra" , apelido: "Laura"} 1 [{nome: "Amanda Rangel", apelido: "Mandi"}{ nome: "Laís Petra", apelido: "Laura" }{nome: "Letícia Chijo", apelido: "Chijo"}]

{nome: "Leticia Chijo" , apelido: "Chijo"} 2 [{nome: "Amanda Rangel", apelido: "Mandi"}{ nome: "Laís Petra", apelido: "Laura" }{nome: "Letícia Chijo", apelido: "Chijo"}]

2]
  
 ["Amanda Rangel" "Lais Petra" "Leticia Chijo"]

3]
   [ { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },  ]
  





const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
 })
 
 console.log(novoArrayC)

*/
 // Exercícios de escrita de código
// 1
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// item a
 const arrayNomesDog = pets.map((item,index,array) => {
     
    return item.nome 
 }  )

 console.log(arrayNomesDog)

//item b
const arraySalsicha = pets.filter((item,index,array) =>{

    return item.raca === "Salsicha"
}

)
console.log(arraySalsicha)

//item c

const arrayDesconto = pets.filter((item,index,array) =>{

    if (item.raca === "Poodle"){
           console.log( `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)    
    }
}

)
console.log(arrayDesconto)

// 2 Questão

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
   //item a
 const arrayNomeItem = produtos.map((item,index,array) => {
      
    return item.nome

 }  )

 console.log(arrayNomeItem)


 //item b

 const descontoDe5 = produtos.map((item,index,array) =>{
        
     let comDesconto = item.preco * 0.95
     let arrayDescontado = [item.nome , comDesconto]
     
       return arrayDescontado
       

 } )

 console.log(descontoDe5)

  //item c
 const arrayBebidas = produtos.filter((item,index,array) =>{

    return item.categoria === 'Bebidas'
 }
 )
     console.log(arrayBebidas)
    
   
 
 //item d
 const arrayYpe = produtos.filter((item,index,array) =>{

    if(item.nome.includes('Ypê')){
       return item.nome
    }
 }
    )
     console.log(arrayYpe)


 //item e


const arrayFraseYpe = produtos.filter((item,index,array) =>{

    if(item.nome.includes('Ypê')){
       return console.log(`Compre ${item.nome} por ${item.preco}`)
    }
 }
    )
     console.log(arrayFraseYpe)
