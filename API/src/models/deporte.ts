import {Schema, model} from "mongoose"



let DeporteScheme:Schema= new Schema({
    nombre: {
        type: String,
        require: true,
    }
}); 


export = model("Deporte", DeporteScheme);