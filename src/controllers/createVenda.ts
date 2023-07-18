import { Product } from "../model/ProductShema";
import { Vendas } from "../model/vendas";
import { Request,Response } from "express";

export const createVenda = async(req:Request,res:Response)=>{

    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = dia + '-' + mes + '-' + ano;

    
    
    try {
        
        const produto = await Product.findOne({nome:req.body.nomeProduto})
        console.log(produto)

        let quantidade = req.body.quantidade ? (req.body.quantidade) : produto?.quantidade!
        let preco = req.body.preco ? (quantidade * req.body.preco) : (quantidade * produto?.preco!)
        



        const venda = new Vendas({
            nomeProduto: produto!.nome,
            preco:preco,
            quantidade:quantidade,
            data:dataAtual
        })
        const saveVenda = await venda.save()
        res.status(200).json(saveVenda)
    } catch (error) {
        console.log(error)
    }
}