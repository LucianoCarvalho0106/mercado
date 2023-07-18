import { Request,Response } from "express";
import { Saidas } from "../model/Saidas";

export const deleteSaida = async(req:Request,res:Response)=>{

    try {
        const {id} = req.body
        const saida = await Saidas.findByIdAndDelete({_id:id})
        res.status(200).json(saida)
    } catch (error) {
        console.log(error)
    }
    
}