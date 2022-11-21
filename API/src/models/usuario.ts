import {Schema, model} from "mongoose"



let UserScheme:Schema= new Schema({
    
    usuario: {
        type: String,
        require: true,
    },
    clave: {
        type: String,
        require: true
    },
    rol: {
        type: Number,
        required: true
    }

}); 

export = model("User", UserScheme);