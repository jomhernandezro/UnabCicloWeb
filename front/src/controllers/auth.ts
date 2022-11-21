import { Request, Response, NextFunction} from "express";
import Usuario from "../models/usuario";
import SHA256 from "./cypher";
import jwt from "jsonwebtoken";
import env from "dotenv"

env.config();

const login_controller = async (request:Request, response:Response, next:NextFunction) =>{

    let usuario:string = request?.body?.usuario;
    let clave:string = request?.body?.clave;
   

    let clave_cypher:string = new SHA256(clave).convert(); 

    Usuario.findOne({usuario:usuario, clave:clave_cypher}).then(doc=>{
        if(!doc) return response.status(404).json("usuario no encontrado");
        
        let payload = {
            usuario: usuario,
            comodin: clave_cypher.slice(1,3) + clave_cypher.slice(0,2)
        };

        let token:string = jwt.sign(payload, process.env.TOKEN as string, { expiresIn: '3h' });
        return response.json(token);
        
    }).catch(err=>{
        console.log(err);
        response.status(404).json("usuario no encontrado");
    });
    
};



const register_controller =  (request:Request, response:Response, next:NextFunction) =>{ 

    let usuario:string = request?.body?.usuario;
    let clave:string = request?.body?.clave;
    let rol:string = request?.body?.rol;

    let clave_cypher:string = new SHA256(clave).convert(); 

    let nuevo = new Usuario({
        usuario: usuario,
        clave: clave_cypher,
        rol: rol
    });

    nuevo.save().catch(err=>{ console.log(err); return  response.status(500).json("error del servidor!"); });

    response.json("usuario registrado con exito");

};


export {
    login_controller,
    register_controller
}