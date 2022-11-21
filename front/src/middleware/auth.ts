import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"
import env from "dotenv"

env.config();


const body_auth_func = (request:Request, response:Response, next:NextFunction) => {

    let token:string = request.headers["access-token"] as string;
    if(!token) return response.status(400).json("error de token");

    jwt.verify(token, process.env.TOKEN as string, (error:any)=>{
        if(error) return response.status(404).json("error de token");
        else next();
    })    

};


export default body_auth_func;