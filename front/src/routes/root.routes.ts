import  {Router}  from "express";

let route:Router = Router();

route.all("/", (req,res,next)=>{
res.json("CICLO 4 | API BY: EQUIPO KEVIN B. & JHON A.");    
});
    
    

module.exports = route;