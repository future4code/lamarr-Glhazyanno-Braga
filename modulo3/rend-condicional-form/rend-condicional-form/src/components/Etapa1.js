import React, {useState} from "react";


export function Etapa1(){
  return(
     <div>
           <h1>ETAPA1 - DADOS GERAIS </h1>
           <h2>1. Qual o seu nome ?</h2>
           <input src="digite seu nome"></input>
           <h2>2. Qual sua idade ?</h2>
           <input src="digite seu nome"></input>
           <h2>3. Qual é seu email ?</h2>
           <input src="digite seu nome"></input>
           <h2>4. Qual a sua escolaridade ?</h2>
           <select>
             <option> Ensino medio Incompleto</option>
             <option> Ensino medio comleto</option>
             <option> Ensino Superior Incompleto </option>
             <option> Ensino Superior Completo </option>
           </select>
     </div>


  )

}