import SideBar from "../../components/sideBar"
import { Container,ContainerData,Titulo,Div,Input } from "../cadastroDeProdutos/cadastroProdutos.style"
import {HeaderVendas,ContainerButtons,Pesquisar,Limpar,Card,HeaderCard,CardContent,ContainerCard} from "./Vendas.style"
import {DivContainerFormEdit} from "../editarProduto/EditarProduto.style"
import axios from "axios"
import { useEffect, useState} from "react"
import { toast } from "react-toastify"


interface IData {
    createdAt: string,
    data:  any,
    nomeProduto: string,
    preco: number,
    precoVenda:number,
    quantidade: string, 
    _id:string

}

const Vendas = () => {
    const [data,setData] = useState<IData[]>([])
    const [dataInicial,setDataInicial] = useState<string>("")
    const [dataFinal,setDataFinal] = useState<string>("")
    
    const quantidade = data.map(item=>(item.precoVenda * Number(item.quantidade))).reduce((acc,total)=>acc+total,0) 

    const getVendas = async()=>{
        try {
            const result = await axios.get("https://mercado-black.vercel.app/vendas")
            setData(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    const getDatas = async()=>{
        const result = (await axios.get("https://mercado-black.vercel.app/vendas")).data
       const vendas = result.filter((item: { data: string })=>item.data >= dataInicial && item.data <= dataFinal )
       setData(vendas)
    }

    async function deleteVenda(_id: string) {
        try {
            await axios.delete("https://mercado-black.vercel.app/vendas", {
                data: {
                    id: _id
                }
            })
            toast.success("Venda Deletada!")
            getVendas()
        } catch (error) {
            console.log(error)
        }
    }
  
    const limpar = ()=>{
        setData([])
        setDataInicial("")
        setDataFinal("")
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
                    <button>Total: R$ {quantidade.toFixed(2)} </button>
                </ContainerButtons>
            </HeaderVendas>
           
            <DivContainerFormEdit>
                <Div>
                        <label htmlFor="dataInicial">Data Inicial</label>
                        <Input value={dataInicial} onChange={(e)=>setDataInicial(e.target.value)} id="dataInicial" type="date" />
                </Div>
                <Div>
                        <label htmlFor="dataFinal">Data Final</label>
                        <Input value={dataFinal} onChange={(e)=>setDataFinal(e.target.value)} id="dataFinal" type="date" />
                </Div>
                <Pesquisar onClick={getDatas}>Pesquisar</Pesquisar>
                <Limpar onClick={limpar}>Limpar</Limpar>
            </DivContainerFormEdit>

        <ContainerCard>
            {
                    data.map(item=>{
                        return(
                            <Card key={item._id}>
                                <HeaderCard>
                                    <p>{item.data}</p>
                                    <span>Total: R$ {quantidade.toFixed(2)}</span>
                                </HeaderCard>
                                
                                <div>
                                    <button onClick={()=>deleteVenda(item._id)}>Deletar</button>
                                </div>
                                
                                <CardContent>
                                    <p>{item.nomeProduto}</p>
                                    <p>QTD: {item.quantidade}</p>
                                    <p>Valor: R$ {item.precoVenda.toFixed(2)}</p>
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