import { useEffect } from "react"
import axios from "axios"
import SideBar from "../../components/sideBar"
import { Table,Container,ContainerData,Titulo,Input,Form,Div,Submit,DivBottom } from "./cadastroProdutos.style"
import {AiOutlineSearch} from "react-icons/ai"

const CadastroProdutos = () => {

  useEffect( ()=>{
   
    const getProducts = async()=>{
      try {
        const data = await axios.get("https://mercado-black.vercel.app/product/all")
        console.log(data.data)
      } catch (error) {
        console.log(error)
      }
      
    }
    getProducts()
  },[])

  return (
    <Container>
      <SideBar></SideBar>
      <ContainerData>
          <div>
            <Titulo>Bom Preço</Titulo>
            <Form>
              <Div>
                <label htmlFor="nome">Nome do Produto</label>
                <Input id="nome" type="text" placeholder="Nome do Produto" />
              </Div>
             <Div>
               <label htmlFor="preco">Preço</label>
              <Input id="preco" type="text" placeholder="Preço" />
             </Div>

             <Div>
              <label htmlFor="precoVenda">Preço de Venda</label>
              <Input id="precoVenda" type="text" placeholder="Preço de Venda" />
             </Div>
             <Div>
              <label htmlFor="quantidade">Quantidade</label>
              <Input id="quantidade" type="number" placeholder="Quantidade" />
             </Div>
              
              <Div>
                <label htmlFor="dataVencimento">Data de Vencimento</label>
                <Input id="dataVencimento" type="date" placeholder="Data de Vencimento" />
              </Div>
              <Div>
                <label htmlFor="codigo">Codigo do Produto</label>
                <Input id="codigo" type="text" placeholder="Codigo do Produto" />
              </Div>
              
              <Submit type="submit">Cadastrar</Submit>
            
            </Form>
          </div>
          <DivBottom>
            <Titulo>Listagem de Produtos</Titulo>
            <Form>
              <Div>
                <label htmlFor="nome2">Nome do Produto</label>
                <Input id="nome2" type="text" placeholder="Nome do Produto" />
              </Div>
                <Submit type="submit">Pesquisar <AiOutlineSearch size={25}></AiOutlineSearch></Submit>
            </Form>
            <Table>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Preço de Venda</th>
                <th>Quantidade</th>
                <th>Ação</th>
              </tr>
              <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            </Table>
          </DivBottom>
      </ContainerData>
      
    </Container>
  )
}

export default CadastroProdutos