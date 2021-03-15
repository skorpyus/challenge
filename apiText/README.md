# Challenge Test
 Technical Challenge Test


## Scripts

Se pueden ejecutar los siguientes scripts

### `npm start`

Para levantar la api en development mode.\
Se abre en el browser [http://localhost:8001] 

### `npm test`

Ejecuta las pruebas sobre la api y deja el servidor levantado.\

## Requerimiento

API REST, a la cual se le envía un texto y responde con el mismo texto invertido.

### Usando NodeJs +ExpressJs se debe crear API de un solo endpoint al cual se le envía el texto de la siguiente forma:
	
	GET /iecho?text=test
### Caso de exito - respuesta 200:
	content-type: application/json
	{
	"text": "tset"
	}

### Caso de parámetros inválidos - respuesta 400:
	Inexistencia de parámetro o parámetro vacío

	content-type: application/json
	{
	"error": "no text"
	}

## Test Unitarios Ok

  GET /iecho
    √ Retorno de texto invertido y NO es palíndromo 
    √ Retorno de texto invertido y SI es palíndromo
    √ Retorno de error cuando falta parámetro texto
    √ Devuelve error cuando el parametro texto esta vacio


  4 passing

## libs & frameworks:
	NodeJs https://nodejs.org/en/
	ExpressJs https://expressjs.com/
	StandardJs https://standardjs.com/
	Mocha https://mochajs.org/
	Chai https://www.chaijs.com/
	SuperTest https://github.com/visionmedia/supertest#readme