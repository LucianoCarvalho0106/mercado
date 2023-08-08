import {useState } from "react"
import SideBar from "../../components/sideBar"
import { Pesquisar } from "../Vendas/Vendas.style"
import { Container, ContainerData, Input, Table, Titulo } from "../cadastroDeProdutos/cadastroProdutos.style"
import { DivContainerFormEdit } from "../editarProduto/EditarProduto.style"
import {Flex,DivVendas,ContainerProductVenda,ProductVenda,Buttons,ItemProduct,Right} from "./RealizarVendas.style"
import axios from "axios"


const RealizarVendas = () => {

    interface List {
        nome:string
        preco:number,
        quantidade:number,
        _id?:number
    }
    

    const [nomeProduto,setNomeProduto] = useState<string>("")
    const [dataProduct,setDataProduct] = useState<{nome:string,preco:number,quantidade:number}> ({nome:"",preco:0,quantidade:0})
    const [listProduct,setListProduct] = useState<List[]>([])
    const [quantidade,setQuantidade] = useState<number>(1)
    

    const buscarProdutoPeloNome = async()=>{
        if(!nomeProduto){
            alert("Digite o nome do Produto!")
            return
        }
        const data = await axios.get("https://mercado-black.vercel.app/product/all")
        const dataJson = data.data
        const nome = dataJson.filter((item:{nome:string})=> String(item.nome).startsWith(nomeProduto) )
        setDataProduct(nome[0])
    } 

    const adicionar = ()=>{
        setListProduct([dataProduct])
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
                quantidade:quantidade
            })

            setListProduct([])
            setNomeProduto("")
            setDataProduct({nome:"",preco:0,quantidade:0})

            const dataUpdate:any = localStorage.getItem("dataProduct")
            const dataUpdateJson = JSON.parse(dataUpdate)
            const update = {
                nome: dataUpdateJson.nome,
                preco: dataUpdateJson.preco,
                precoVenda: dataUpdateJson.precoVenda,
                quantidade: Number(dataUpdateJson.quantidade) - Number(quantidade),
                codigo: dataUpdateJson.codigo
            }

            localStorage.setItem("dataProduct",JSON.stringify(update))
            await axios.put("https://mercado-black.vercel.app/product/update",update)
            setListProduct([])
            setNomeProduto("")
            setDataProduct({nome:"",preco:0,quantidade:0})
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
                                <td>Preço</td>
                                <td>Ação</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>{dataProduct.nome}</td>
                               
                                <td>{dataProduct.preco.toLocaleString("pt-BR", {
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
                                        <span>Valor: R$ {item.preco.toLocaleString("pt-BR", {
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
                    <p>Total: R$ { Number(listProduct[0].preco * quantidade ).toFixed(2)}</p>
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