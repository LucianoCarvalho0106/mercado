import { Vendas } from "../model/vendas";
import { Request, Response } from "express";

export const getVendas = async(req:Request,res:Response)=>{
    try {
        const venda = await Vendas.find({})
        res.status(200).json(venda)
    } catch (error) {
        console.log(error)
    }
   
}