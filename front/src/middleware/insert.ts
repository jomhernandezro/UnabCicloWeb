import { NextFunction, Request, Response } from "express";


const deporte = (request:Request, response:Response, next:NextFunction) =>{

    let {nombre} = request?.body;
    
    if(nombre === undefined) { return response.status(400).json({notice: "error", reason: "empty field"})  }
    next();

};

const equipo = (request:Request, response:Response, next:NextFunction) =>{
    let {nombre} = request?.body;
    if(nombre === undefined) { return response.status(400).json({notice: "error", reason: "empty field"})  }
    next();
};


const evento = (request:Request, response:Response, next:NextFunction) =>{
    let {nombre, fecha, marcador, equipo1, equipo2, tipo_deporte} = request?.body;
    
    if(nombre === undefined || fecha  === undefined || marcador === undefined || equipo1  === undefined || equipo2  === undefined || tipo_deporte === undefined) { return response.status(400).json({notice: "error", reason: "empty field"})  }
    next();

};


export {
    deporte,
    equipo,
    evento
}
