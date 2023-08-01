import { useState } from "react"
import SideBar from "../../components/sideBar"
import { Container, ContainerData,Titulo,Input,Div} from "../cadastroDeProdutos/cadastroProdutos.style"
import { DivContainerFormEdit,DivButtonsEditar,BtnSalvar,BtnCancelar } from "./EditarProduto.style"
import axios from "axios"
import { useNavigate} from "react-router-dom"



const EditarProduto = () => {

  const data:any = localStorage.getItem("dataEdit")
    const dataJson =JSON.parse(data)[0]
    console.log(dataJson)
    

  const [nomeEditar,setNomeEditar] = useState<string|undefined>(dataJson.nome)
  const [precoEditar,setPrecoEditar] = useState<number|string>(dataJson.preco)
  const [precoVendaEditar,setPrecoVendaEditar] = useState<number|string>(dataJson.precoVenda)
  const [quantidadeEditar,setQuantidadeEditar] = useState<number|string>(dataJson.quantidade)
  const [codigoEditar]= useState<number|string> (dataJson.codigo)

  const navigate = useNavigate()

  const updateProduct = async()=>{
    
    const dataUpdate = {
      nome:nomeEditar,
      preco:precoEditar,
      precoVenda:precoVendaEditar,
      quantidade:quantidadeEditar,
      codigo:codigoEditar
    }
     await axios.put("https://mercado-black.vercel.app/product/update",dataUpdate)
     navigate("/cadastroProdutos")
    
  }
  

  
  return (
    <Container>
      <SideBar></SideBar>
      <ContainerData>
        <Titulo>Editar Produto</Titulo>
        <DivContainerFormEdit>
        <Div>
            <label htmlFor="nomeProdutoEditar">Nome do Produto</label>
            <Input placeholder="Nome do Produto" value={nomeEditar} onChange={(e)=>setNomeEditar(e.target.value)} type="text" id="nomeProdutoEditar"/>
          </Div>

          <Div>
            <label htmlFor="precoProdutoEditar">Preço</label>
            <Input value={precoEditar} onChange={(e)=>setPrecoEditar(e.target.value)} type="number" id="precoProdutoEditar"/>
          </Div>
          
          <Div>
            <label htmlFor="precoDeVendaProdutoEditar">Preço de Venda</label>
            <Input value={precoVendaEditar} onChange={(e)=>setPrecoVendaEditar(e.target.value)} type="number"  id="precoDeVendaProdutoEditar"/>
          </Div>

          <Div>
            <label htmlFor="quantidadeEditar">Quantidade</label>
            <Input value={quantidadeEditar} onChange={(e)=>setQuantidadeEditar(e.target.value)} type="number"  id="quantidadeEditar"/>
          </Div>
          <Div>
            <label htmlFor="codigoEditar">Código</label>
            <Input value={codigoEditar} disabled placeholder="Código do Produto"  type="number"  id="codigoEditar"/>
          </Div>
      </DivContainerFormEdit>
      <DivButtonsEditar>
            <BtnSalvar onClick={updateProduct}>Salvar</BtnSalvar>
            <BtnCancelar onClick={()=>navigate("/cadastroProdutos")}>Cancelar</BtnCancelar>
          </DivButtonsEditar>
      </ContainerData>
      
    </Container>
  )
}

export default EditarProduto