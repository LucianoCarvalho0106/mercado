import { Request,Response } from "express";
import { Saidas } from "../model/Saidas";

export const updateSaida = async(req:Request,res:Response)=>{

    const data = {
        descricao:req.body.descricao,
        preco:req.body.preco,
        data:req.body.data,
        id:req.body.id
    }
    try {
        
        const saida = await Saidas.find({_id:data.id})
        const update = await Saidas.findByIdAndUpdate({_id:data.id},data)
        
        res.status(200).json(update)
    } catch (error) {
        console.log(error)
    }
    
}