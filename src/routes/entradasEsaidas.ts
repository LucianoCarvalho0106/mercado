import { Router } from "express";
import { Entradas } from "../controllers/entradas";
import { detalhes } from "../controllers/detalhes";

const routerEntradasEsaidas = Router()

routerEntradasEsaidas.get("/",Entradas)
routerEntradasEsaidas.get("/detalhes",detalhes)

export default routerEntradasEsaidas