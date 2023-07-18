import mongoose from "mongoose";


const saidaSchema = new mongoose.Schema({
    descricao:String,
    preco:Number,
    data:String
})

export const Saidas = mongoose.model("Saidas",saidaSchema)