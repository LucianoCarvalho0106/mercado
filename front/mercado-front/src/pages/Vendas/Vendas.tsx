import SideBar from "../../components/sideBar"
import { Container,ContainerData,Titulo,Div,Input } from "../cadastroDeProdutos/cadastroProdutos.style"
import {HeaderVendas,ContainerButtons,Pesquisar,Limpar,Card,HeaderCard,CardContent,ContainerCard} from "./Vendas.style"
import {DivContainerFormEdit} from "../editarProduto/EditarProduto.style"
import axios from "axios"
import { useEffect, useState } from "react"


interface IData {
    createdAt: string,
    data:  string,
    nomeProduto: string,
    preco: number,
    quantidade: string, 
    _id:string

}


const Vendas = () => {
    const [data,setData] = useState<IData[]>([])
    
    const getVendas = async()=>{
        try {
            const result = await axios.get("https://mercado-black.vercel.app/vendas")
            setData(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteVenda = async(id:string)=>{
        try {
            await axios.delete("https://mercado-black.vercel.app/vendas",{
                data:{
                    _id:id
                }
            })
            getVendas()
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
            <HeaderVendas>
                <Titulo>Vendas</Titulo>
                <ContainerButtons>
                    <button>Vendas: {data.length} </button>
                    <button>Total: R$ {data.map(item=>item.preco).reduce((acc,current)=>acc+current,0).toFixed(2)} </button>
                </ContainerButtons>
            </HeaderVendas>
           
            <DivContainerFormEdit>
                <Div>
                        <label htmlFor="dataInicial">Data Inicial</label>
                        <Input id="dataInicial" type="date" />
                </Div>
                <Div>
                        <label htmlFor="dataFinal">Data Final</label>
                        <Input id="dataFinal" type="date" />
                </Div>
                <Pesquisar>Pesquisar</Pesquisar>
                <Limpar>Limpar</Limpar>
            </DivContainerFormEdit>

        <ContainerCard>
            {
                    data.map(item=>{
                        return(
                            <Card key={item._id}>
                                <HeaderCard>
                                    <p>{item.data}</p>
                                    <span>Total: R$ {(item.preco * Number(item.quantidade)).toFixed(2)}</span>
                                </HeaderCard>
                                
                                <div>
                                    <button onClick={()=>deleteVenda(item._id)}>Deletar</button>
                                </div>
                                
                                <CardContent>
                                    <p>{item.nomeProduto}</p>
                                    <p>QTD: {item.quantidade}</p>
                                    <p>Valor: R$ {item.preco}</p>
                                </CardContent>
                            </Card>
                        )
                    })
            }
        </ContainerCard>
            
           
        </ContainerData>
    </Container>
  )
}

export default Vendas