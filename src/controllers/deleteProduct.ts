import { Request,Response } from "express"
import { Product } from "../model/ProductShema"


export const deleteProduct = async (req:Request,res:Response)=>{

    try {
        const {_id:id} = req.body
        const deleted = await Product.findByIdAndDelete(id)
        res.status(200).json("Deletado com sucesso!")
    } catch (error) {
        console.log(error)
    }
    
}