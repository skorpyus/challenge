/*
Componente con el input de texto y boton de envio
Control de texto y captura para envio a aplicacion principal via propiedades de componentes
*/
import React from 'react'
import PropTypes from 'prop-types'

class InputText extends React.Component{
    constructor(props){
        super(props);
        //En el estado texto estara la captura del texto ingresado
        this.state = { texto: '' }
        //Binding de metodo que maneja cambio de texto para ser invocado con this
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (evento) {
        //Este metodo gaurda el texto ingresado ante cada evento de change del input text
        this.setState({texto: evento.target.value })
    }

    render(){
        //Renderizacion del input y boton con captura de evento al enviar y cambio de texto
        const { handleEnvio } = this.props
        const { texto } = this.state

        return (
            <nav className='navbar'>
                <div className='container-fluid inputBox'>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.texto}
                        className="inputText form-control" 
                        type="text" 
                        placeholder="Ingresar Texto" 
                        aria-label="Ingresar texto"
                        
                    />
                    <button className="btn btn-primary" type="button" onClick={() => handleEnvio({texto})}>Enviar</button>
                </div>

            </nav>
        )
    }

}

InputText.propTypes = {
    handleEnvio : PropTypes.func.isRequired
}

export default InputText