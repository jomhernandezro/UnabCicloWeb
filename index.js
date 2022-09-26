const express = require('express')
const app = express()
const puerto = 3000

//rutas
app.use(express.json())
app.use('/api/categoria', require('./routes/categoriasRoute'))

app.listen(puerto , ()=>{
    console.log("Servidor Activo, puerto: " + puerto)
})