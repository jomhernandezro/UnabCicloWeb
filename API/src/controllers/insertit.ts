import { Request, Response } from "express";
import Deporte from "../models/deporte";
import Equipo from "../models/equipo";
import Evento from "../models/evento";


const logic_deporte = async (request:Request, response:Response) =>{

    const {nombre} = request?.body;

    let temporal = new Deporte({
        nombre:nombre
    });

    temporal.save().catch(err=>{
        console.log(err);
        response.status(500).json("error al subir!");
    });
 
  response.json("todo ok");
};




const logic_equipo = async (request:Request, response:Response) =>{
 
    const {nombre} = request?.body;

    let temporal = new Equipo({
        nombre:nombre
    });

    temporal.save().catch(err=>{
        console.log(err);
        response.status(500).json("error al subir!");
    });
 
  response.json("todo ok");
};


const logic_evento = async (request:Request, response:Response) =>{
 
    const {nombre, fecha, marcador, equipo1, equipo2, tipo_deporte} = request?.body;

    let temporal = new Evento({
        nombre:nombre,
        fecha: fecha,
        marcador: marcador,
        equipo1: equipo1,
        equipo2: equipo2,
        tipo_deporte: tipo_deporte
    });

    temporal.save().catch(err=>{
        console.log(err);
        response.status(500).json("error al subir!");
    });
 
  response.json("todo ok");
};





export {
    logic_deporte,
    logic_equipo,
    logic_evento
}