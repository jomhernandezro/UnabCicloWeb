import { NextFunction, Request, Response } from "express";


const verify = (request:Request, response:Response, next:NextFunction) =>{

    let {_id} = request?.body;
    if(_id === undefined) { return response.status(400).json({notice: "error", reason: "empty field"})  }
    next();

};


export default verify;