import { Request, Response, NextFunction } from "express";

let body_check_params = (request:Request, response:Response, next:NextFunction) =>{

    let {usuario, clave} = request?.body;
    if(!usuario || !clave) return response.status(400).json("datos incompletos");
    next();
};

export = body_check_params;