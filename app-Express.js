const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const puerto = process.env.PORT

app.set('view engine', 'hbs');
app.use(express.static('public'))
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res)=> {
  res.render('home.hbs',{
    titulo: 'Curso de node',
    nombre: 'David',
    hotel: 'Hotel Sol Maria'
  })
})

app.get('/generic', (req, res)=> {
    res.render('generic.hbs',{
      titulo: 'Curso de node',
      nombre: 'David',
      hotel: 'Hotel Sol Maria'
    })
})

app.get('/elements', (req, res)=> {
  res.render('elements.hbs',{
    titulo: 'Curso de node',
    nombre: 'David',
    hotel: 'Hotel Sol Maria'
  })
})

// app.get('/hola-Mundo', (req, res)=> {
//   res.send('Hello World desde su ruta')
// })

// app.get('/index', (req, res)=> {
//   res.sendFile(__dirname + '/public/index.html')
// })

// app.get('/generic', (req, res)=> {
//   res.sendFile(__dirname + '/public/index.html')
// })

// app.get('/elements', (req, res)=> {
//   res.sendFile(__dirname + '/public/elements.html')
// })

// //*:para cualquier ruta que no este definida previamente 
// app.get('*', (req, res)=> {
//   res.sendFile(__dirname + '/public/RoadTrip/error404.html')
// })  
app.listen( puerto,() => {
  console.log(`Ejemplo corriendo en el puerto:${puerto}`)
} )


