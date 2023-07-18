import {Request,Response} from "express"
import { Vendas } from "../model/vendas"

export const entradasEntreDatas = async (req:Request,res:Response)=>{
    try {
        const {dataInicial,dataFinal} = req.body
    const query = {
        data:{
            $gte:dataInicial,
            $lte:dataFinal
        }
    }
    const dataEntre = await Vendas.find(query)
    res.status(200).json(dataEntre)
    } catch (error) {
        console.log(error)
    }
    

}