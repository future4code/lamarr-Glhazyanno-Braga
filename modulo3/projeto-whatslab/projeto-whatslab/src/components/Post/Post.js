import React, {useState} from 'react'
import './style.css'
import styled from 'styled-components'

const PostDaMensagem = styled.div`
  display: flex;
  align-items: flex-end;
  
  
p{
  margin-right: 10px;
  margin-left: 10px;
}

`

function Post(props){
  const [state, setState] = useState({})

  return(
    < PostDaMensagem >
        
        <p>{props.nomeUsuario}</p>
        <p>{props.mensagem} </p>
      

      
      
        
      
     
    </PostDaMensagem>
  )
}


export default Post