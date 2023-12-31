import  express  from "express";
import "dotenv/config"
import mongoose from "mongoose";
import routerProduct from "./routes/produtos";
import routerVendas from "./routes/vendas";
import routerEntradasEsaidas from "./routes/entradasEsaidas";
import routerSaidas from "./routes/saidas";
import cors from "cors"

const app = express()

const corsOptions = {
    origin: '*', // Origem permitida
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/product",routerProduct)
app.use("/vendas",routerVendas)
app.use("/entradasEsaidas",routerEntradasEsaidas)
app.use("/saidas",routerSaidas)

mongoose.connect(process.env.DATABASE_URL!)


app.listen(process.env.PORT,()=>console.log(`Server running on port ${process.env.PORT}`))