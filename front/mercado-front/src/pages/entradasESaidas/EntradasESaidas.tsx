import {ReactElement } from "react"
import SideBar from "../../components/sideBar"
import { Container,ContainerData, Titulo } from "../cadastroDeProdutos/cadastroProdutos.style"
import {BsGraphUpArrow,BsGraphDownArrow,BsTextParagraph} from "react-icons/bs"
import {DivButtons,Button,Button2,Button3} from "./EntradasESaidas.style"


const EntradasESaidas = ():ReactElement => {
  return (
    <Container>
      <SideBar></SideBar>
      <ContainerData>
        <Titulo>Entradas e Saídas</Titulo>
        <DivButtons>
          <Button><BsGraphUpArrow></BsGraphUpArrow> Entradas</Button>
          <Button2><BsGraphDownArrow></BsGraphDownArrow> Saídas</Button2>
          <Button3><BsTextParagraph></BsTextParagraph> Detalhes</Button3>
        </DivButtons>
      </ContainerData>
    </Container>
  )
}

export default EntradasESaidas