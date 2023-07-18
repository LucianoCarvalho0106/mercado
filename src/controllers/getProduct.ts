import { Request,Response } from "express"
import { Product } from "../model/ProductShema"


export const getProductAll = async(req:Request,res:Response)=>{

    try {
        const produtos = await Product.find({})
        res.status(200).json(produtos);
    } catch (error) {
        console.log(error)
    }
    
}