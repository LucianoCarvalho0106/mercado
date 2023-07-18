import { Product } from "../model/ProductShema";
import { Request,Response} from "express";

export const updateProduct = async (req:Request,res:Response)=>{

    try {
        const {codigo,nome,preco,precoVenda,quantidade} = req.body
        const product = await Product.findOne({codigo})

        const productSaved = await Product.updateOne({codigo},{nome,preco,precoVenda,quantidade})
        res.json(productSaved)

    } catch (error) {
        console.log(error)
    }
}