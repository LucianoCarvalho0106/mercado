import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home/Home'
import { GlobalStyle } from './GlobalStyle'
import CadastroProdutos from './pages/cadastroDeProdutos/CadastroProdutos'
import EditarProduto from './pages/editarProduto/EditarProduto'
import Vendas from './pages/Vendas/Vendas'
import RealizarVendas from './pages/realizarVendas/RealizarVendas'
import EntradasESaidas from './pages/entradasESaidas/EntradasESaidas'
import Entradas from './pages/entradas/Entradas'
import Saidas from './pages/saidas/Saidas'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>
  },
  {
    path:"/cadastroProdutos",
    element:<CadastroProdutos></CadastroProdutos>
  },
  {
    path:"/editarProduto",
    element:<EditarProduto></EditarProduto>
  },
  {
    path:"/vendas",
    element:<Vendas></Vendas>
  },
  {
    path:"/realizarVendas",
    element:<RealizarVendas></RealizarVendas>
  },
  {
    path:"/entradasESaidas",
    element:<EntradasESaidas></EntradasESaidas>
  },
  {
    path:"Entradas",
    element:<Entradas></Entradas>
  },
  {
    path:"/saidas",
    element:<Saidas></Saidas>
  }
  
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
