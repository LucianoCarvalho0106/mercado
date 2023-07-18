import { Request,Response } from "express";
import { Saidas } from "../model/Saidas";

export const createSaida = async(req:Request,res:Response)=>{


    try {
        const {descricao,preco,data} = req.body
    
        const saida = new Saidas({
            descricao,
            preco,
            data
        })
        saida.save()
        res.status(200).json(saida)
    } catch (error) {
        console.log(error)
    }
   
}