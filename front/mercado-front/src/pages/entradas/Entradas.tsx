import SideBar from "../../components/sideBar"

import {Header,ContainerButtons,Button} from "./Entradas.style"
import { Container,ContainerData,Div,Input,Titulo,Table} from "../cadastroDeProdutos/cadastroProdutos.style"
import { DivContainerFormEdit } from "../editarProduto/EditarProduto.style"
import axios from "axios"
import { useEffect, useState } from "react"

const Entradas = () => {

    interface IData  {
        data: string,
        nomeProduto: string,
        preco:number,
        quantidade:string,
        _id:string
    }

    const [vendas,setVendas] = useState<IData[]>([])
    const [dataInicial,SetDataInicial] = useState<string>("")
    const [dataFinal,SetDataFinal] = useState<string>("")

    const varlorReduce = vendas.map(item=>item.preco)

    const buscaEntreDatas = async()=>{
        const result = (await axios.get("https://mercado-black.vercel.app/vendas")).data
        const vendas = result.filter((item: { data: string })=>item.data >= dataInicial && item.data <= dataFinal )
        setVendas(vendas)
    }

    const getVendas = async()=>{
        try {
            const data = await axios.get("https://mercado-black.vercel.app/vendas")
            setVendas(data.data)
            console.log(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getVendas()
    },[])
  return (
    <Container>
        <SideBar></SideBar>
        <ContainerData>
            <Header>
                <Titulo>Entradas</Titulo>
                <ContainerButtons>
                    <button>Vendas: {vendas.length}</button>
                    <button>Total: R$ {vendas.map((item)=>item.preco).reduce((acc,total)=>acc+total,0).toFixed(2)}  </button>
                </ContainerButtons>
            </Header>  

            <DivContainerFormEdit>
                <Div>
                    <label htmlFor="dataInicial">Data Inicial</label>
                    <Input value={dataInicial} onChange={(e)=>SetDataInicial(e.target.value)} type="date" id="dataInicial"></Input>
                </Div>
                <Div>
                    <label htmlFor="dataInicial">Data Final</label>
                    <Input value={dataFinal} onChange={(e)=>SetDataFinal(e.target.value)}  type="date" id="dataFinal"></Input>
                </Div>
                <Button onClick={buscaEntreDatas}>Pesquisar</Button>
            </DivContainerFormEdit>

            <Table>
                <thead>
                    <tr>
                        <td>Tipo de Entrada</td>
                        <td>Valor</td>
                        <td>Data</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        vendas.map((item,index)=>{
                            return(
                                <tr key={item._id}>
                                    <td>Venda</td>
                                    <td>{varlorReduce[index].toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}</td>
                                    <td>{item.data}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </ContainerData>
    </Container>
  )
}

export default Entradas