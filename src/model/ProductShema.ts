import { timeStamp } from "console"
import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
    codigo:Number,
    nome:String,
    preco:Number,
    precoVenda:Number,
    quantidade:Number,
},
{
    timestamps:true
})

export const Product = mongoose.model("Product",productSchema)

