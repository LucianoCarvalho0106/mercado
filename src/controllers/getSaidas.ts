import { Request,Response } from "express";
import { Saidas } from "../model/Saidas";

export const getSaidas = async(req:Request,res:Response)=>{

    try {
        const saidas = await Saidas.find({})
        const lengthSaidas = saidas.length
        const precos = saidas.map(item=>item.preco)
        const totalValorSaidas = precos.reduce((acc,total)=> acc! + total!,0)
        const dataSaidas = {
            lengthSaidas:lengthSaidas,
            precos:precos,
            totalValorSaidas:totalValorSaidas
        }
        console.log(dataSaidas)
        res.status(200).json({saidas,dataSaidas})
    } catch (error) {
        console.log(error)
    }
    

}