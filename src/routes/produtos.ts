import { Router } from "express";
import { createProduct } from "../controllers/createProductAll";
import { getProductAll } from "../controllers/getProduct";
import { updateProduct } from "../controllers/updateProduct";
import { deleteProduct } from "../controllers/deleteProduct";
const routerProduct = Router()

routerProduct.post("/",createProduct)
routerProduct.get("/all",getProductAll)
routerProduct.put("/update",updateProduct)
routerProduct.delete("/",deleteProduct)

export default routerProduct