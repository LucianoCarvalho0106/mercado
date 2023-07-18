import { Request,Response } from "express";
import { Vendas } from "../model/vendas";
import { Saidas } from "../model/Saidas";


export const detalhes = async(req:Request,res:Response)=>{

    try {
        const vendas = await Vendas.find()
        const reduceVendas = vendas.map(item=>item.preco).reduce((acc,total)=>acc! + total!,0)
        const saidas = await Saidas.find()
        const reduceSaidas = saidas.map(item=>item.preco).reduce((acc,total)=>acc! + total!,0)
        const saldo = (reduceVendas! - reduceSaidas!)
        
        

        res.status(200).json({reduceVendas,reduceSaidas,saldo})
    } catch (error) {
        console.log(error)
    }
    
}