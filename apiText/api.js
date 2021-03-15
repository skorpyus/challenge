const express = require('express')
const api = express()

api.get('/iecho', (req, res) => {
  let text
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    // Se obtiene parametro text del query string del request
    text = req.query.text
  } catch (error) {
    // En caso que el parametro no exista o tenga otro inconveniente se envia codigo de estado 400
    // Junto al codigo de estado se envia mensaje de error
    res.status(400).send({ error: 'no text' })
    res.end()
    return
  }

  if (text == null || text === '') {
    // En caso que el texto enviado sea nulo o vacio e envia codigo de estado 400
    // Se envia mensaje de error
    res.status(400).send({ error: 'no text' })
    res.end()
    return
  }
  // Si no hubo errores al obtener la palabra enviada por parametro, la misma se invierte y guarda
  const textoInvertido = text.split('').reverse().join('')
  // Se define flag palindromo
  let esPalindromo = false

  // Se evalua si la palabra original es exactamente igual a la palabra invertida
  if (text === textoInvertido) {
    // Al ser iguales, entonces significa que es palindromo
    esPalindromo = true
  }
  // Se envia cabecera con codigo de estado 200 - Ok
  res.send({ text: textoInvertido, palindrome: esPalindromo })
})

api.listen(8000, () => {
  // Se lanza server
  console.log('Server activo y escuchando 8081')
})

// Se exporta para poder usar en las pruebas
module.exports = api
