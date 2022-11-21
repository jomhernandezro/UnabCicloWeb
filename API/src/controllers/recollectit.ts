import { NextFunction, Request, Response } from "express";
import Deporte from "../models/deporte";
import Equipo from "../models/equipo";
import Evento from "../models/evento";


const logic_deporte = async (request:Request, response:Response, next:NextFunction) =>{
 
    const query = await Deporte.find();
    if(!query) return response.status(404).json("404 not found");
    response.json(query);
 
};



const logic_equipo = async (request:Request, response:Response, next:NextFunction) =>{
 
    const query = await Equipo.find();
    if(!query) return response.status(404).json("404 not found");
    response.json(query);
 
};


const logic_evento = async (request:Request, response:Response, next:NextFunction) =>{
 
    const query = await Evento.find();
    if(!query) return response.status(404).json("404 not found");
    response.json(query);

};




export {
    logic_deporte,
    logic_equipo,
    logic_evento
}