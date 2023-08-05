import SideBar from "../../components/sideBar"
import { Container,ContainerData,Titulo,Div,Input } from "../cadastroDeProdutos/cadastroProdutos.style"
import {HeaderVendas,ContainerButtons,Pesquisar,Limpar,Card,HeaderCard,CardContent} from "./Vendas.style"
import {DivContainerFormEdit} from "../editarProduto/EditarProduto.style"



const Vendas = () => {
  return (
    <Container>
        <SideBar></SideBar>
        <ContainerData>
            <HeaderVendas>
                <Titulo>Vendas</Titulo>
                <ContainerButtons>
                    <button>Vendas: </button>
                    <button>Total: R$ </button>
                </ContainerButtons>
            </HeaderVendas>
           
            <DivContainerFormEdit>
                <Div>
                        <label htmlFor="dataInicial">Data Inicial</label>
                        <Input id="dataInicial" type="date" />
                </Div>
                <Div>
                        <label htmlFor="dataFinal">Data Final</label>
                        <Input id="dataFinal" type="date" />
                </Div>
                <Pesquisar>Pesquisar</Pesquisar>
                <Limpar>Limpar</Limpar>
            </DivContainerFormEdit>

            <Card>
                <HeaderCard>
                    <p>03/08/2023</p>
                    <span>Total: R$ 200,00</span>
                </HeaderCard>
                
                <div>
                    <button>Deletar</button>
                </div>
                
                <CardContent>
                    <p>Nome</p>
                    <p>QTD:</p>
                    <p>Valor: R$ 70,00</p>
                </CardContent>
            </Card>
           
        </ContainerData>
    </Container>
  )
}

export default Vendas