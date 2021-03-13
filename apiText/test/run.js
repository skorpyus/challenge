const request = require('supertest')
const api = require('../api')
const expect = require('chai').expect

describe('GET /iecho', function () {
  it('Retorno de texto invertido y NO es palíndromo', async function () {
    const response = await request(api)
      .get('/iecho')
      // Pasamos el parametro por query string
      .query('text=test')
      .then(response => {
        // Se guarda la respuesta para evaluar
        return response
      })
      // Validacion de estado HTTP 200 - Esperamos Respuesta Ok
    expect(response.status, 'Estado Ok').to.equal(200)
    // Validacion de texto devuelto en el cuerpo de la respuesta
    expect(response.body.text).to.equal('tset')
    // Para el ejemplo test invertido se espera que no sea palíndromo
    expect(response.body.palindrome).to.equal(false)
  })

  it('Retorno de texto invertido y SI es palíndromo', async function () {
    const response = await request(api)
      .get('/iecho')
      // Pasamos como ejemplo una palabra que es palíndromo
      .query('text=anana')
      .then(response => {
        // Se guarda la respuesta para ser evaluada
        return response
      })
      // Validacion de estado HTTP 200 - Esperamos Respuesta Ok
    expect(response.status, 'Estado Ok').to.equal(200)
    // Validacion de texto devuelto en el cuerpo de la respuesta
    expect(response.body.text).to.equal('anana')
    // Para el ejemplo anana invertido se espera que sea palíndromo
    expect(response.body.palindrome).to.equal(true)
  })

  it('Retorno de error cuando falta parámetro texto', async function () {
    const response = await request(api)
      .get('/iecho')
      // El request va sin parametro - Solo es request al endpoint
      .then(response => {
        // Se guarda la respuesta para ser evaluada
        return response
      })
      // Validamos que la respuesta HTTP sea 400 segun lo esperado ante el error
    expect(response.status, 'Estado Error').to.equal(400)
    // Validamos el mensaje de error esperado en el cuerpo de la respuesta
    expect(response.body.error).to.equal('no text')
  })

  it('Devuelve error cuando el parametro texto esta vacio', async function () {
    const response = await request(api)
      .get('/iecho')
      // pasamos el nombre del parametro, pero sin valor o valor nulo
      .query('text=')
      .then(response => {
        // Se guarda la respuesta para ser evaluada
        return response
      })
      // Validamos que la respuesta HTTP sea 400 segun lo esperado ante el error
    expect(response.status, 'Estado Error').to.equal(400)
    // Validamos el mensaje de error esperado en el cuerpo de la respuesta
    expect(response.body.error).to.equal('no text')
  })
})
