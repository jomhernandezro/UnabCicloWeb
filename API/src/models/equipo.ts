import {Schema, model} from "mongoose"



let EquipoScheme:Schema= new Schema({
    nombre: {
        type: String,
        require: true,
    }
}); 

export = model("Equipo", EquipoScheme);