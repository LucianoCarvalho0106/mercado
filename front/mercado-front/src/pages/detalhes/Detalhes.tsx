import SideBar from "../../components/sideBar"
import { Container, ContainerData, Titulo } from "../cadastroDeProdutos/cadastroProdutos.style"
import {DivButtons,ButtonELabel} from "./Detalhes.style"


const Detalhes = () => {
  return (
    <Container>
        <SideBar></SideBar>
        <ContainerData>
            <Titulo>
                Detalhes Entre Entradas e Saídas
            </Titulo>
            
            <DivButtons>
                <ButtonELabel>
                    <label htmlFor="entradas">Entradas</label>
                    <button id="entradas">R$: </button>
                </ButtonELabel>
                <ButtonELabel>
                    <label htmlFor="Saidas">Saidas</label>
                    <button id="Saidas">R$: </button>
                </ButtonELabel>
                <ButtonELabel>
                    <label htmlFor="liquido">Liquido</label>
                    <button id="liquido">R$: </button>
                </ButtonELabel>
            </DivButtons>
        </ContainerData>
    </Container>
  )
}

export default Detalhes