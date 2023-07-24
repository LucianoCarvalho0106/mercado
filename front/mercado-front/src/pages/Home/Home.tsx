import {AiOutlineShoppingCart} from "react-icons/ai"
import {MdAttachMoney} from "react-icons/md"
import {VscGraph} from "react-icons/vsc"
import {CgDetailsMore} from "react-icons/cg"
import { ContainerHome,ContainerButtons,Button1,Button2,Button3,Button4,ButtonsDiv } from "./Home.style"

import SideBar from "../../components/sideBar"
import { useNavigate } from "react-router-dom"



function Home() {
  const navigate = useNavigate()
  return (
    <ContainerHome>
      <SideBar></SideBar>
      <ContainerButtons>
        <ButtonsDiv>
          <Button1 onClick={()=>navigate("/cadastroProdutos")}>
            Cadastro de Produtos
            <AiOutlineShoppingCart size={30}></AiOutlineShoppingCart>
          </Button1>
          
          <Button2>
            Realizar Vendas
            <MdAttachMoney></MdAttachMoney>
          </Button2>
            
          
        </ButtonsDiv>

        <ButtonsDiv>
          <Button3>
            Entradas e Saídas
            <VscGraph></VscGraph>
          </Button3>
          <Button4>
            Detalhes de Vendas
            <CgDetailsMore></CgDetailsMore>
          </Button4>
        </ButtonsDiv>

      </ContainerButtons>
    </ContainerHome>
  )
}

export default Home