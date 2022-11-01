const categoriaModel = require('../models/categoriaSchema')

const categoriaListar = async (req, res) => {
    try {
        const categorias = await categoriaModel.find()
        res.status(200).send(categorias)
    } catch (err) {
        if (err) {
            console.log("error categoria Listar" + err)
            res.status(400).send("error categoriaListar")
        }
    }
}

const categoriaGuardar = async (req, res) => {
    console.log(req.body)
    const nombre = req.body.nombre
    let mensaje = {}
    if (nombre == '') {
        mensaje = { "msj": "Nombre de Categoria No valido" }
        res.status(400).json(mensaje)
    } else {
        try {
            const categoria = new categoriaModel(req.body)
            categoria.save()
            mensaje = {
                "msj": "Categoria Almacenada con exito"
            }
            res.status(200).json(mensaje)
        } catch (error) {
            console.log("error categoria Guardar" + error)

        }
    }
}

const categoriaObtener = async (req, res) => {
    const id = req.params.id
    console.log("id solicitado: " + id)
    //proceso db
    let categoria
    if (id == 1) {
        //futbol
        categoria = {
            "1": "futbol"
        }
    }
    if (id == 2) {
        categoria = {
            "2": "Baloncesto"
        }
    }
    res.status(200).json(categoria)

}

const categoriaActualizar = async (req, res) => {
    console.log("put")
    console.log(req.body)
    const { id, nombre } = req.body
    try {
        if (id == '') {
            res.status(400).json({ "msj": "Error: Id Vacio" })
        }
        if (nombre != '') {
            const categoria = {}
            categoria.nombre = nombre
            const rta = await categoriaModel.updateOne(
                
                   { _id : id},
                   {$set : categoria},
                   {new : true}
                
            )
            res.status(200).json({ "msj": "Categoria Actualizada con Exito" })
        } else {
            res.status(400).json({ "msj": "Categoria No Valida" })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ "msj": "Error" + error })
    }
}

const categoriaEliminar = async (req, res) => {
    console.log("del" + req.params.id)
    const id = req.params.id
    try {
        if (id == '') {
            res.status(400).json({ "msj": "Id No Valido" })
        }
        const rta = await categoriaModel.deleteOne({_id : id})
        res.status(200).json({ "msj": "Categoria eliminado con exito" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ "msj": "Error eliminando la Categoria" })
    }

}
module.exports = {
    categoriaListar,
    categoriaGuardar,
    categoriaObtener,
    categoriaActualizar,
    categoriaEliminar
}