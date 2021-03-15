/*
Aplicacion principal concentrador de logica y compaginacion de componentes
*/
import React from 'react'
import { invertirPalabra } from '../services/apiText'
import Palabra from './Palabra';
import Titulo from './Titulo';
import InputText from './InputText'


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            palabras: [
            ],
            isFetching: true
        }

        //binding de metodos a la clase para ser invocados con this en la renderizacion
        this.handleEnvio = this.handleEnvio.bind(this)
        this.render = this.render.bind(this)
    }

    handleEnvio ( textoBoton ) {
        //Método que captura el evento de click del boton para enviar texto
        //console.log("Texto envio Boton: " + textoBoton.texto);
        //se invoca APIText que invierte el texto e informa si es palindromo
        invertirPalabra(textoBoton.texto)
            .then( response => response.json())
            .then( respuesta => {
                   const palabraEnviada = this.state.palabras.concat({ palabra: textoBoton.texto, respuesta : { respuesta }}) 
                   this.setState({palabras: palabraEnviada, isFetching: false })
                console.log("Resultado:" )
                console.log(this.state)
            })  
    }

    render() {
        //Renderizacion principal de la aplicacion
        //console.log(this.state);        
        return (
            <React.Fragment>
                <InputText handleEnvio={this.handleEnvio}/>
                <div className='resultados'>
                    <Titulo>Resultados:</Titulo>
                    <table className="table table-striped" >
                        <thead>
                            <tr>
                                <th scope='col'>Palabra Original</th>
                                <th scope='col'>Palabra Invertida</th>
                                <th scope='col'>Palíndromo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Palabra palabras={this.state.palabras}/>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default App;