import { useEffect, useState } from "react"
import SideBar from "../../components/sideBar"
import { Container, ContainerData,Titulo,Input,Div} from "../cadastroDeProdutos/cadastroProdutos.style"
import { DivContainerFormEdit,DivButtonsEditar,BtnSalvar,BtnCancelar } from "./EditarProduto.style"



const EditarProduto = () => {

  // const [nomeEditar,setNomeEditar] = useState<string>("")
  // const [precoEditar,setPrecoEditar] = useState<number|string>(0)
  // const [precoVendaEditar,setPrecoVendaEditar] = useState<number|string>(0)
  // const [quantidadeEditar,setQuantidadeEditar] = useState<number|string>(0)
  const [dataEdit,setDataEdit]=useState<any>({})

  useEffect(()=>{
    const data:any = localStorage.getItem("dataEdit")
    const dataJson =JSON.parse(data)
    setDataEdit(dataJson)
    console.log(dataEdit)
  },[])
  return (
    <Container>
      <SideBar></SideBar>
      <ContainerData>
        <Titulo>Editar Produto</Titulo>
        <DivContainerFormEdit>
        <Div>
            <label htmlFor="nomeProdutoEditar">Nome do Produto</label>
            <Input placeholder="Nome do Produto" value={dataEdit.nome} onChange={(e)=>setDataEdit(e.target.value)} type="text" id="nomeProdutoEditar"/>
          </Div>

          <Div>
            <label htmlFor="precoProdutoEditar">Preço</label>
            <Input value={dataEdit.preco} onChange={(e)=>setDataEdit(e.target.value)} type="number" id="precoProdutoEditar"/>
          </Div>
          
          <Div>
            <label htmlFor="precoDeVendaProdutoEditar">Preço de Venda</label>
            <Input value={dataEdit.precoVenda} onChange={(e)=>setDataEdit(e.target.value)} type="number"  id="precoDeVendaProdutoEditar"/>
          </Div>

          <Div>
            <label htmlFor="quantidadeEditar">Quantidade</label>
            <Input value={dataEdit.quantidade} onChange={(e)=>setDataEdit(e.target.value)} type="number"  id="quantidadeEditar"/>
          </Div>
      </DivContainerFormEdit>
      <DivButtonsEditar>
            <BtnSalvar>Salvar</BtnSalvar>
            <BtnCancelar>Cancelar</BtnCancelar>
          </DivButtonsEditar>
      </ContainerData>
      
    </Container>
  )
}

export default EditarProduto