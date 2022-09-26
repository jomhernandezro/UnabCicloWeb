
const categoriaListar = ()=>{
    listado = {
        "1" : "futbol",
        "2" : "baloncesto",
        "3" : "Tenis"
    }
    return listado
}

const categoriaGuardar = async (req,res)=>{
    console.log(req.body)
    const nombre = req.body.nombre
    let mensaje = {}
    if(nombre ==''){
        mensaje = { "msj" : "Nombre de Categoria No valido" }
        res.status(400).json(mensaje)
    }else{
        mensaje = {
            "msj" : "Categoria Almacenada con exito"
        }
        res.status(200).json(mensaje)
    }
}

const categoriaObtener = async (req,res) =>{
    const id = req.params.id 
    console.log("id solicitado: " + id)
    //proceso db
    let categoria
    if(id == 1) { 
        //futbol
        categoria = {
            "1" : "futbol"
        }
    }  
    if(id == 2){
        categoria = {
            "2" : "Baloncesto"
        }
    }
    res.status(200).json(categoria)

}

const categoriaActualizar = async (req,res) =>{
    console.log("put")
    console.log(req.body)
    const { id, nombre } = req.body
    try{
        if(id == ''){
            res.status(400).json({ "msj" : "Error: Id Vacio"})
        }
        if(nombre != ''){
            res.status(200).json({"msj" : "Categoria Actualizada con Exito"})
        }else{
            res.status(400).json({ "msj" : "Categoria No Valida"})
        }

    }catch(error){
        console.log(error)
        res.status(400).json({ "msj" : "Error" + error })
    }
}

const categoriaEliminar = async (req,res) =>{
    console.log("id a eliminar" + req.params.id)
    const id = req.params.id
    try{
        if(id == 0){
            res.status(400).json({ "msj": "Id No Valido"})
        }

        res.status(200).json({"msj" : "Categoria eliminado con exito"})
    }catch(error){
        console.log(error)
        res.status(400).json({ "msj": "Error eliminando la Categoria"})
    }

}
module.exports = {
    categoriaListar,
    categoriaGuardar,
    categoriaObtener,
    categoriaActualizar,
    categoriaEliminar
}