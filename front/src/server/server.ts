import  express, {Express}  from "express";
import env from "dotenv"
import cors from "cors"
import helmet from "helmet"
import db from "../connections/mongodb"

import * as routes from "./routes.map.json"

env.config();
const server:Express = express();

if(!db) console.log("error database [connection]");


server.use(helmet());
server.disable('x-powered-by');

server.use(cors())
server.use(express.json()); 
server.use(express.urlencoded({extended: true}));

server.set("PORT", process.env.PORT || 3000);

server.use("/", require(routes.root));
server.use("/api", require(routes.root));
server.use("/api/auth", require(routes.auth));
server.use("/api/deporte", require(routes.deporte));
server.use("/api/equipo", require(routes.equipo));
server.use("/api/evento", require(routes.evento));


server.listen(server.get("PORT"),()=>{
 console.log("servidor conectado, puerto en uso: ", server.get("PORT"));
 
});