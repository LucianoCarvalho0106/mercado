import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home/Home'
import { GlobalStyle } from './GlobalStyle'
import CadastroProdutos from './pages/cadastroDeProdutos/CadastroProdutos'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>
  },
  {
    path:"/cadastroProdutos",
    element:<CadastroProdutos></CadastroProdutos>
  },
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
