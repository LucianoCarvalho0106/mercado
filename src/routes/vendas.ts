import { Router } from "express";
import { createVenda } from "../controllers/createVenda";
import { getVendas } from "../controllers/getVendas";
import { deleteVendas } from "../controllers/deleteVenda";
import { entradasEntreDatas } from "../controllers/entradasEntreDatas";
const routerVendas = Router()

routerVendas.get("/",getVendas)
routerVendas.post("/",createVenda)
routerVendas.delete("/",deleteVendas)
routerVendas.get("/entradasEntre",entradasEntreDatas)




export default routerVendas