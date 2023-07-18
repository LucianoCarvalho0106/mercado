import { Request,Response } from "express";
import { Vendas } from "../model/vendas";


export const deleteVendas = async (req:Request,res:Response)=>{

    try {
        const {id} = req.body
        const venda = await Vendas.findByIdAndDelete({_id:id})
        res.status(200).json(venda)
    } catch (error) {
        console.log(error)
    }
    
}