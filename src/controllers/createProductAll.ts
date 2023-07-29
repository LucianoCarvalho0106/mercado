import { Request,Response } from "express"
import { Product } from "../model/ProductShema"
import mongoose from "mongoose"



export const createProduct =  async(req:Request,res:Response)=>{

    try {
        
        const product = new Product({
            codigo:req.body.codigo,
            nome:req.body.nome,
            preco: req.body.preco,
            precoVenda:req.body.precoVenda,
            quantidade:req.body.quantidade
        })
    
        const products = await product.save()
        res.status(200).json(products)
    } catch (error:unknown) {
        res.status(500).json(error)
    }
    
    

}