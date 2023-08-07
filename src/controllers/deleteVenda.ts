import { Request,Response } from "express";
import { Vendas } from "../model/vendas";


export const deleteVendas = async (req:Request,res:Response)=>{

    try {
res.setHeader('Access-Control-Allow-Credentials', "true")
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

        const {id} = req.body
        const venda = await Vendas.findByIdAndDelete({_id:id})
        res.status(200).json(venda)
    } catch (error) {
        console.log(error)
    }
    
}