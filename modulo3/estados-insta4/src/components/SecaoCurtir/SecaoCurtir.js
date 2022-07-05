import React from 'react'
import './style.css'


export function SecaoCurtir(props) {
	return (
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={''}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}