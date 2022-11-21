import {Request, Response } from "express";
import Deporte from "../models/deporte";
import Equipo from "../models/equipo";
import Evento from "../models/evento";


const logic_deporte = async (request:Request, response:Response) =>{
  
    const id = request?.body?.id;

    let query = await Deporte.findByIdAndDelete ({_id:id}).catch(err=>{
        console.log(err);
        response.status(500).json("server error");
    })

    if(!query) return response.status(404).json("404 not found");

    response.json(query);
};



const logic_equipo = async (request:Request, response:Response) =>{
  
    const id = request?.body?.id;

    let query = await Equipo.findByIdAndDelete({_id:id}).catch(err=>{
        console.log(err);
        response.status(500).json("server error");
    })

    if(!query) return response.status(404).json("404 not found");

    response.json(query);

};





const logic_evento = async (request:Request, response:Response) =>{
  
    const id = request?.body?.id;

    let query = await Evento.findByIdAndDelete({_id:id}).catch(err=>{
        console.log(err);
        response.status(500).json("server error");
    })

    if(!query) return response.status(404).json("404 not found");

    response.json(query);

};






export {
    logic_deporte,
    logic_equipo,
    logic_evento
}