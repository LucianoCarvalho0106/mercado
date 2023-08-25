import {useEffect, useState } from "react"
import SideBar from "../../components/sideBar"
import { Pesquisar } from "../Vendas/Vendas.style"
import { Container, ContainerData, Input, Table, Titulo } from "../cadastroDeProdutos/cadastroProdutos.style"
import { DivContainerFormEdit } from "../editarProduto/EditarProduto.style"
import {Flex,DivVendas,ContainerProductVenda,ProductVenda,Buttons,ItemProduct,Right} from "./RealizarVendas.style"
import axios from "axios"
import { toast } from "react-toastify"


const RealizarVendas = () => {

    interface List {
        codigo?: string,
        precoVenda?: number,
        nome:string,
        preco:number,
        quantidade:number,
        _id?:number
    }
    
    const [nomeProduto,setNomeProduto] = useState<string>("")
    const [dataProduct,setDataProduct] = useState<{nome:string,preco:number,quantidade:number,precoVenda?:number,codigo?:string}> ({nome:"",preco:0,precoVenda:0,quantidade:0})
    const [listProduct,setListProduct] = useState<List[]>([])
    const [quantidade,setQuantidade] = useState<number>(1)
    const [,setTableBody] = useState<any>([])

    const getProducts = async()=>{
        try {
          const data = await axios.get("https://mercado-black.vercel.app/product/all")
          setTableBody(data.data)
          //console.log(data.data)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
        getProducts()
      },[])
    

    const buscarProdutoPeloNome = async()=>{
        if(nomeProduto == ""){
            toast.info("Digite o nome do Produto!")
            return
        }
        const data = await axios.get("https://mercado-black.vercel.app/product/all")
        const dataJson = data.data
        const nome = dataJson.filter((item:{nome:string})=> String(item.nome).startsWith(nomeProduto) )
        setDataProduct(nome[0])
    } 

    const adicionar = ()=>{
        setListProduct([dataProduct])
        console.log(listProduct)
    }

    const cancelar = ()=>{
        setListProduct([])
    }
    
    const criarVenda = async()=>{
        try {
            if(quantidade<=0){
                alert("Digite uma quantidade válida!")
                return
            }
            await axios.post("https://mercado-black.vercel.app/vendas",{
                nomeProduto:listProduct[0].nome,
                preco:listProduct[0].preco,
                precoVenda: listProduct[0].precoVenda,
                quantidade:quantidade
            })
 
            const update = {
                nome: listProduct[0].nome,
                preco: listProduct[0].preco,
                precoVenda: listProduct[0].precoVenda,
                quantidade: Number(listProduct[0].quantidade) - Number(quantidade),
                codigo: listProduct[0].codigo
            }

            
            await axios.put("https://mercado-black.vercel.app/product/update",update)

            setListProduct([])
            setNomeProduto("")
            setDataProduct({nome:"",preco:0,quantidade:0,precoVenda:0})
            toast.success("Venda Criada!")
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <Container>
        <SideBar></SideBar>
        <ContainerData>
            <Titulo>Realizar Vendas</Titulo>
            <DivContainerFormEdit>
                <DivVendas>
                    <Flex>
                        <Input value={nomeProduto} onChange={(e)=>setNomeProduto(e.target.value)} type="text" placeholder="Nome do Produto"></Input>
                        <Pesquisar onClick={buscarProdutoPeloNome}>Pesquisar</Pesquisar>
                    </Flex>
                    <Table>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Preço de Venda</td>
                                <td>Ação</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>{dataProduct.nome}</td>
                               
                                <td>{dataProduct.precoVenda!.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })
                                }
                                </td>
                               
                                <td><button onClick={adicionar}>Adicionar</button></td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </DivVendas>
                {
                    listProduct.length > 0 ? (
                        <ContainerProductVenda>
                    <ProductVenda>
                        
                        {
                            listProduct.map(item=>{
                                return(
                                    <ItemProduct key={item._id}>
                                        <span key={item._id}>{item.nome}</span>
                                        <span>Quantidade: {quantidade}</span>
                                        <span>Valor: R$ {item.precoVenda!.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}</span>
                                    </ItemProduct>
                                )
                            })
                        }
                        <Right>
                            <button onClick={()=>{
                                    if(quantidade<=0 ){
                                        alert("Digite uma quantidade válida!")
                                        return
                                    }
                                    setQuantidade(quantidade-1)}
                                }>-</button>
                            <button onClick={()=>{
                                if(quantidade > dataProduct.quantidade -1){
                                    alert(`A quantidade de itens disponíveis é ${dataProduct.quantidade}`)
                                    return
                                } 
                                setQuantidade(quantidade+1)}
                                }>+</button>
                        </Right>
                        
                    </ProductVenda>
                    <p>Total: R$ { Number(listProduct[0].precoVenda! * quantidade ).toFixed(2)}</p>
                    <Buttons>
                        <button onClick={criarVenda}>Finalizar Venda</button>
                        <button onClick={cancelar}>Cancelar Venda</button>
                    </Buttons>
                    
                </ContainerProductVenda>
                    ): <></>
                }
                
                
            </DivContainerFormEdit>
        </ContainerData>
    </Container>
  )
}

export default RealizarVendas