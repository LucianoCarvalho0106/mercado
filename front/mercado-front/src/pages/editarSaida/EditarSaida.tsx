import { useNavigate } from "react-router-dom"
import SideBar from "../../components/sideBar"
import { Container,ContainerData, Titulo,Form,Div,Input} from "../cadastroDeProdutos/cadastroProdutos.style"
import { Salvar,Cancelar,DivButtons } from "./EditarSaida.style"
import { useEffect, useState } from "react"
import axios from "axios"



const EditarSaida = () => {

const navigate = useNavigate()
   
const[storage,setStorage] = useState<{descricao:string,valor:number,data:string,id:string}> ({descricao:"",valor:0,data:"",id:""})
const[descricao,setDescricao] = useState<string>(storage.descricao)
const [valor,setValor] = useState<number>(0)
const [data,setData] = useState<string>("")
    
    const load = ()=>{
        const data:any = localStorage.getItem("editSaida")
        const dataJson= JSON.parse(data)!
        setStorage(dataJson)
        setDescricao(dataJson.descricao)
        setValor(dataJson.valor)
    }

    const dataUpdate = {
        descricao:descricao,
        preco:valor,
        data:data,
        id:storage.id
    }

    const update = async()=>{
        try {
            if(data == "" || descricao == ""){
                alert("Preencha todos os campos!")
                return
            }
            await axios.put("https://mercado-black.vercel.app/saidas",dataUpdate)
            alert("Atualizado Com Sucesso!")
            navigate("/saidas")

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        load()
    },[])

  return (
    <Container>
        <SideBar></SideBar>
        <ContainerData>
            <Titulo>Editar Saída</Titulo>
            <Form>
                <Div>
                    <label htmlFor="Descrição">Descrição da Despesa</label>
                    <Input value={descricao} onChange={(e)=>setDescricao(e.target.value)}  id="Descrição" type="text"></Input>
                </Div>
                <Div>
                    <label htmlFor="valor">Valor</label>
                    <Input value={valor} onChange={(e)=>setValor(Number(e.target.value))}   id="valor" type="number"></Input>
                </Div>
                <Div>
                    <label htmlFor="data">Data</label>
                    <Input value={data} onChange={(e)=>setData(e.target.value)} id="data" type="date"></Input>
                </Div>
            </Form>
            
            <DivButtons>
                <Salvar onClick={update}>Salvar</Salvar>
                <Cancelar onClick={()=>navigate("/saidas")}>Cancelar</Cancelar>
            </DivButtons>
            
        </ContainerData>
    </Container>
  )
}

export default EditarSaida