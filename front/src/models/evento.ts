import mongoose, {Schema, model} from "mongoose"

let schema = mongoose.Schema;
let Equipo = mongoose.model("Equipo");

let EventoScheme:Schema= new Schema({
    nombre: {
        type: String,
        require: true,
    },
    fecha: String,
    marcador: String,
    equipo1: {type: schema.Types.ObjectId, ref: "Equipo" },
    equipo2: {type: schema.Types.ObjectId, ref: "Equipo" },
    tipo_deporte: String
}); 


export = model("Evento", EventoScheme);