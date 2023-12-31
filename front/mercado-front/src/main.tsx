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
import EditarSaida from './pages/editarSaida/EditarSaida'
import Detalhes from './pages/detalhes/Detalhes'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
  },
  {
    path:"/editarSaida",
    element:<EditarSaida></EditarSaida>
  },{
    path:"/detalhes",
    element:<Detalhes></Detalhes>
  }
 
  
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
      <ToastContainer closeOnClick pauseOnHover autoClose={4000}></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
