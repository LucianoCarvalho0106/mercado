import {ReactElement } from "react"
import SideBar from "../../components/sideBar"
import { Container,ContainerData, Titulo } from "../cadastroDeProdutos/cadastroProdutos.style"
import {BsGraphUpArrow,BsGraphDownArrow,BsTextParagraph} from "react-icons/bs"
import {DivButtons,Button,Button2,Button3} from "./EntradasESaidas.style"
import { useNavigate } from "react-router-dom"

const EntradasESaidas = ():ReactElement => {
  const navigate = useNavigate()
  return (
    <Container>
      <SideBar></SideBar>
      <ContainerData>
        <Titulo>Entradas e Saídas</Titulo>
        <DivButtons>
          <Button onClick={()=>navigate("/entradas")}><BsGraphUpArrow></BsGraphUpArrow> Entradas</Button>
          <Button2 onClick={()=>navigate("/saidas")}><BsGraphDownArrow></BsGraphDownArrow> Saídas</Button2>
          <Button3 onClick={()=>navigate("/detalhes")}><BsTextParagraph></BsTextParagraph> Detalhes</Button3>
        </DivButtons>
      </ContainerData>
    </Container>
  )
}

export default EntradasESaidas