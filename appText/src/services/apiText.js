/*
Componente que invoca API y devuelve promesa para tratar respuesta
*/
const urlApiText = 'http://localhost:8000'
export function invertirPalabra( palabra ){

    console.log("invertirPalabra: " + palabra)
    return fetch(`${urlApiText}/iecho?text=${palabra}`,{
        mode: 'cors',
        method: 'GET',
        header: {
        'Access-Control-Allow-Origin':'*'
        }
        })    
}

export default { invertirPalabra }