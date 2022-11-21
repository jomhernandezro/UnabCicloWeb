import {Router} from "express";
import auth from "../middleware/auth"

import isId from "../middleware/id.param"

import * as insert_params from "../middleware/insert"
import * as getters from "../controllers/recollectit"
import * as insertit from "../controllers/insertit"
import * as getit from "../controllers/getit"
import * as deleteit from "../controllers/deleteit"

let route:Router = Router();

route.post("/", auth, insert_params.evento, insertit.logic_evento)
route.get("/all", auth, getters.logic_evento)
route.get( "/", auth, isId, getit.logic_evento)
route.put( "/", auth, insert_params.evento, insertit.logic_evento)
route.delete("/", auth, isId, deleteit.logic_evento)

export = route;