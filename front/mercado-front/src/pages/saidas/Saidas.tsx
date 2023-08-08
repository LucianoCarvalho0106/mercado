import SideBar from "../../components/sideBar"
import { Container,ContainerData, Titulo} from "../cadastroDeProdutos/cadastroProdutos.style"
import { ContainerButtons, Header } from "../entradas/Entradas.style"


const Saidas = () => {
  return (
    <Container>
        <SideBar></SideBar>
        <ContainerData>
            <Header>
                <Titulo>Saídas</Titulo>
                <ContainerButtons>
                    <button>Saídas: </button>
                    <button>Total: R$ </button>
                </ContainerButtons>
            </Header>
        </ContainerData>
    </Container>
  )
}

export default Saidas