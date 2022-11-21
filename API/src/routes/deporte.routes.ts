import {Router} from "express";
import auth from "../middleware/auth"

import isId from "../middleware/id.param"

import * as insert_params from "../middleware/insert"
import * as getters from "../controllers/recollectit"
import * as insertit from "../controllers/insertit"
import * as getit from "../controllers/getit"
import * as deleteit from "../controllers/deleteit"

let route:Router = Router();

route.post("/", auth, insert_params.deporte, insertit.logic_deporte)
route.get("/all", auth, getters.logic_deporte)
route.get( "/", auth, isId, getit.logic_deporte)
route.put( "/", auth, insert_params.deporte, insertit.logic_deporte)
route.delete("/", auth, isId, deleteit.logic_deporte)

export = route;