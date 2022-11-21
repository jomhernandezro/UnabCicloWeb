import { Router } from "express";
import params from "../middleware/auth.params"
import * as auth_controller from "../controllers/auth"

let route:Router = Router();

route.post('/login', params, auth_controller.login_controller)
route.post('/register', params, auth_controller.register_controller)


export = route;