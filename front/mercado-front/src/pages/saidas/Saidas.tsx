import { useState,useEffect} from "react"
import SideBar from "../../components/sideBar"
import { Container,ContainerData, Div, Input, Table, Titulo} from "../cadastroDeProdutos/cadastroProdutos.style"
import { DivContainerFormEdit } from "../editarProduto/EditarProduto.style"
import { Button, ContainerButtons, Header } from "../entradas/Entradas.style"
import axios from "axios"
import {AiFillEdit} from "react-icons/ai"
import{BsFillTrashFill} from "react-icons/bs"
import {ButtonIcon} from "./Saidas.style"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Saidas = () => {

  const navigate = useNavigate()
 
  const [saidas,setSaidas] = useState<any>([])
  const [descricao,setDescricao] = useState<string>("")
  const [valor,setValor] = useState<number|string>("")
  const [data,setData] = useState<string>("")
  const [datasPrice,setDatasPrice] = useState<any>({})

  const buscarSaidas = async()=>{
    try {
      const data = await axios.get("https://mercado-black.vercel.app/saidas")
      setSaidas([data.data][0].saidas)
      setDatasPrice(data.data.dataSaidas)
    } catch (error) {
      console.log(error)
    }
  }
  const saidaObj = {
    descricao,
    preco:valor,
    data
  }

  const criarSaida = async()=>{
    try {
      if(descricao == "" || valor == "" || data ==""){
        toast.warn("Preencha todos os campos!")
        return
      }
      await axios.post("https://mercado-black.vercel.app/saidas",saidaObj)
      buscarSaidas()
      setDescricao("")
      setValor("")
      setData("")
      toast.success("Saida Adicionada!")
    } catch (error) {
      console.log(error)
    }
  }

  const deleteSaida = async(id:string|number)=>{
    try {
      await axios.delete("https://mercado-black.vercel.app/saidas",{
        data:{id}
      })
      buscarSaidas()
    } catch (error) {
      console.log(error)
    }
  }

  const editSaida = (item:any)=>{
    const edit = {
      descricao:item.descricao,
      valor:item.preco,
      data:item.data,
      id:item._id
    }
    localStorage.setItem("editSaida",JSON.stringify(edit))
    navigate("/editarSaida")
  }

  useEffect(()=>{
    buscarSaidas()
  },[])
  return (
    <Container>
        <SideBar></SideBar>
        <ContainerData>
            <Header>
                <Titulo>Saídas</Titulo>
                <ContainerButtons>
                    <button>Saídas: {datasPrice.lengthSaidas} </button>
                    <button>Total: R$ {datasPrice.totalValorSaidas}</button>
                </ContainerButtons>
            </Header>
            <DivContainerFormEdit>
              <Div>
                <label htmlFor="descricao">Descrição da Despesa</label>
                <Input onChange={(e)=>setDescricao(e.target.value)} value={descricao} id="descricao" type="text"></Input>
              </Div>
              <Div>
                <label htmlFor="valor">Valor</label>
                <Input onChange={(e)=>setValor(e.target.value)} value={valor} id="valor" type="number"></Input>
              </Div>
              <Div>
                <label htmlFor="data">Data</label>
                <Input onChange={(e)=>setData(e.target.value)} value={data} id="data" type="date"></Input>
              </Div>
              <Button onClick={criarSaida}>Salvar</Button>
            </DivContainerFormEdit>
            <Titulo style={{marginTop:30}}>Listagem de Saídas</Titulo>

            <Table>
              <thead>
                <tr>
                  <td>Descrição da Despesa</td>
                  <td>Valor</td>
                  <td>Data</td>
                  <td>Ação</td>
                </tr>
              </thead>
              <tbody>
                
                  {
                    saidas.map((item:any)=>{
                      return(
                        <tr key={item._id}>
                          <td>{item.descricao}</td>
                          <td>{item.preco}</td>
                          <td>{item.data}</td>
                          <td>
                            <ButtonIcon onClick={()=>editSaida(item)}><AiFillEdit size={25}></AiFillEdit></ButtonIcon>
                            <ButtonIcon onClick={()=>deleteSaida(item._id)}><BsFillTrashFill size={25}></BsFillTrashFill></ButtonIcon>
                            </td>
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

export default Saidas