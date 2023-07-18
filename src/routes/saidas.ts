import { Router } from "express";
import { createSaida } from "../controllers/createSaida";
import { getSaidas } from "../controllers/getSaidas";
import { deleteSaida } from "../controllers/deleteSaida";
import { updateSaida } from "../controllers/updateSaida";

const routerSaidas = Router()

routerSaidas.post("/",createSaida)
routerSaidas.get("/",getSaidas)
routerSaidas.delete("/",deleteSaida)
routerSaidas.put("/",updateSaida)


export default routerSaidas