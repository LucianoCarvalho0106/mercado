import SideBar from "../../components/sideBar"
import { Table,Container,ContainerData,Titulo,Input,Form,Div,Submit } from "./cadastroProdutos.style"
import {AiOutlineSearch} from "react-icons/ai"

const CadastroProdutos = () => {
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
               <label htmlFor="preco">Nome do Produto</label>
              <Input id="preco" type="text" placeholder="Preço de Venda" />
             </Div>

             <Div>
              <label htmlFor="quantidade">Nome do Produto</label>
              <Input id="quantidade" type="text" placeholder="Quantidade" />
             </Div>
             <Div>
              <label htmlFor="dataVencimento">Nome do Produto</label>
              <Input id="dataVencimento" type="date" placeholder="Data de Vencimento" />
             </Div>
              
              <Div>
                <label htmlFor="codigo">Nome do Produto</label>
                <Input id="codigo" type="date" placeholder="Código do Produto" />
              </Div>
              
              <Submit type="submit">Cadastrar</Submit>
            
            </Form>
          </div>
          <div>
            <Titulo>Listagem de Produtos</Titulo>
            <Form>
                <input type="text" placeholder="Nome do Produto" />
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
          </div>
      </ContainerData>
      
    </Container>
  )
}

export default CadastroProdutos