/*
Componente que maneja la lista de palabras enviadas y sus respectivas respuestas

*/
import React from 'react'

const Palabra = ( { palabras } ) => {
    // Si no tiene contenido el array se envia un registro vacio para la table
    if ( palabras.length == 0 ){
        return <tr><td></td><td></td><td></td></tr>
    }

    //Se recorre array en forma invertida y se conforma cada registro de table
    const listado = palabras.slice().reverse().map( ( palabra,indice ) => <tr key={ indice }>
        <td>{ palabra.palabra }</td>
        <td>{ palabra.respuesta.respuesta.text }</td>
        <td>{ palabra.respuesta.respuesta.palindrome?'SI':'NO' }</td>
    </tr>
    )

    return listado
}

export default Palabra