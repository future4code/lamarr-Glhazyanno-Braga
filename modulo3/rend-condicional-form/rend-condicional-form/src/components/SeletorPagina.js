import React, {useState} from "react";


export function SeletorPagina(){
      const [trocaState, setTrocaState] = useState(true);
      if(trocaState){
           return <h1>Valor verdadeiro</h1>
       }else{
           return  <h1>False</h1>
       }    
}