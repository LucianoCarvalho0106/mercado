import mongoose from "mongoose";

const vendasSchema = new mongoose.Schema({
    nomeProduto:String,
    preco:Number,
    quantidade:{type:String, default:1},
    data:String
},{
    timestamps:true
})

export const Vendas = mongoose.model("Vendas",vendasSchema)