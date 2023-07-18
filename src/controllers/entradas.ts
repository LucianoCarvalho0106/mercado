import { Request,Response } from "express";
import { Vendas } from "../model/vendas";

export const Entradas = async(req:Request,res:Response)=>{
    try {
        const vendas = await Vendas.find({})
        const vendaPrecos = vendas.map(item=>item.preco)
        const vendaLength = vendas.length
        const vendaTotal = vendaPrecos.reduce((acc,total)=>acc!+total!,0)

        const objVendas = {vendas,vendaPrecos,vendaLength,vendaTotal}
        
          res.status(200).json(objVendas)

    } catch (error) {
        console.log(error)
    }
}