import {JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import axios from "axios"
import SideBar from "../../components/sideBar"
import { Table,Container,ContainerData,Titulo,Input,Form,Div,Submit,DivBottom,ButtonIcon,DivButtonIcon } from "./cadastroProdutos.style"
import {AiOutlineSearch,AiFillEdit,AiFillDelete} from "react-icons/ai"
import { useNavigate } from "react-router-dom"

const CadastroProdutos = () => {

  const [nome,setNome] = useState<string>("")
  const [preco,setPreco] = useState<number|string>(0)
  const [precoVenda,setPrecoVenda] = useState<number|string>(0)
  const [quantidade,setQuantidade] = useState<number|string>(0) 
  const [codigo,setCodigo] = useState<string>("")
  const [nome2,setNome2] = useState<string>("")
  const [tableBody,setTableBody] = useState<any>([])

  const navigate = useNavigate()
   
  const editProduct = async()=>{
   
    const edit = tableBody.map((item: { nome: any; preco: any; precoVenda: any; quantidade: any })=>{
      return{
        nome:item.nome,
        preco:item.preco,
        precoVenda:item.precoVenda,
        quantidade:item.quantidade,
      }
    })
    
    localStorage.setItem("dataEdit",JSON.stringify(edit))
    navigate("/editarProduto")
   }

  const getProducts = async()=>{
    try {
      const data = await axios.get("https://mercado-black.vercel.app/product/all")
      setTableBody(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProduct = async(prod:string|number)=>{
    await axios.delete("https://mercado-black.vercel.app/product",{
      data:{_id:prod}
    })
    getProducts()
  }

  useEffect( ()=>{
    getProducts()
  },[])

 useEffect(()=>{
  console.log(tableBody)
 },[tableBody])

  const dataProducts = {
    nome,
    preco,
    precoVenda,
    quantidade,
    codigo,
    nome2
  }

  const cadastrar = async(e: { preventDefault: () => void })=>{
    e.preventDefault()
    if(!nome  || !preco || !precoVenda || !quantidade || !codigo){
      alert("Preencha todos os Campos!")
    }
    try {
     await axios.post("https://mercado-black.vercel.app/product",dataProducts)
      setNome("")
      setPreco(0)
      setPrecoVenda(0)
      setQuantidade(0)
      setCodigo("")
      getProducts()
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <Container>
      <SideBar></SideBar>
      <ContainerData>
          <div>
            <Titulo>Bom Preço</Titulo>
            <Form>
              <Div>
                <label htmlFor="nome">Nome do Produto</label>
                <Input value={nome} onChange={(e)=>setNome(e.target.value)} id="nome" type="text" placeholder="Nome do Produto" />
              </Div>
             <Div>
               <label htmlFor="preco">Preço</label>
              <Input value={preco} onChange={(e)=>setPreco(e.target.value)} id="preco" type="number" placeholder="Preço" />
             </Div>

             <Div>
              <label htmlFor="precoVenda">Preço de Venda</label>
              <Input value={precoVenda} onChange={(e)=>setPrecoVenda(e.target.value)} id="precoVenda" type="number" placeholder="Preço de Venda" />
             </Div>
             <Div>
              <label htmlFor="quantidade">Quantidade</label>
              <Input value={quantidade} onChange={(e)=>setQuantidade(e.target.value)} id="quantidade" type="number" placeholder="Quantidade" />
             </Div>
              
              <Div>
                <label htmlFor="codigo">Codigo do Produto</label>
                <Input value={codigo} onChange={(e)=>setCodigo(e.target.value)} id="codigo" type="text" placeholder="Codigo do Produto" />
              </Div>
              
              <Submit onClick={cadastrar} type="submit">Cadastrar</Submit>
            
            </Form>
          </div>
          <DivBottom>
            <Titulo>Listagem de Produtos</Titulo>
            <Form>
              <Div>
                <label htmlFor="nome2">Nome do Produto</label>
                <Input value={nome2} onChange={(e)=>setNome2(e.target.value)} id="nome2" type="text" placeholder="Nome do Produto" />
              </Div>
                <Submit type="submit">Pesquisar <AiOutlineSearch size={25}></AiOutlineSearch></Submit>
            </Form>
            <Table>
              <thead>
                <tr>
                  <td>Nome</td>
                  <td>Preço</td>
                  <td>Preço de Venda</td>
                  <td>Quantidade</td>
                  <td>Ação</td>
                </tr>
               
              </thead>
              <tbody>
                
                   { tableBody ? (
                       tableBody.map((item: { nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, _id:any,preco:any,precoVenda:any,quantidade:number })=>{
                        return (
                          <tr key={item._id}>
                              <td id={item._id}>{item.nome}</td>
                              <td id={item._id}>{(item.preco.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                          decimal: ".",
                        }))}
                        </td>
                        <td id={item._id}>{item.precoVenda.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                          decimal: ".",
                        })}</td>
                        
                        <td id={item._id}>{item.quantidade}</td>
                        <td id={item._id}>
                          <DivButtonIcon>
                            <ButtonIcon onClick={editProduct}><AiFillEdit size={25}></AiFillEdit></ButtonIcon>
                            <ButtonIcon onClick={()=>deleteProduct(item._id)}><AiFillDelete size={25}></AiFillDelete></ButtonIcon>
                          </DivButtonIcon>
                        </td>

                        
                          </tr>
                          
                        )
                      })
                   ):(null)
                   
                  }
            </tbody>
            </Table>
          </DivBottom>
      </ContainerData>
      
    </Container>
  )
}

export default CadastroProdutos