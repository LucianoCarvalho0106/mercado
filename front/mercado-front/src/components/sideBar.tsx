import {AiOutlineShoppingCart} from "react-icons/ai"
import {MdAttachMoney} from "react-icons/md"
import {FaMoneyCheck} from "react-icons/fa"
import {VscGraph} from "react-icons/vsc"
import { Container,Nav } from "./sideBar.style"

const SideBar = () => {
  return (
    <Container>
        
        <div>
            <img src="../../logo.jpg" alt="logo" />
            <Nav>
                <button>
                    <AiOutlineShoppingCart size={25} color={"#fff"}></AiOutlineShoppingCart>
                    <span>Cadastro de produtos</span>
                </button>
                <button>
                    <MdAttachMoney size={25} color={"#fff"}></MdAttachMoney>
                    <span>Vendas</span>
                </button>
                <button>
                    <FaMoneyCheck size={25} color={"#fff"}></FaMoneyCheck>
                    <span>Realizar Vendas</span>
                </button>
                <button>
                    <VscGraph size={25} color={"#fff"}></VscGraph>
                    <span>Entradas e saídas</span>
                </button>
            </Nav>
        </div>
    </Container>
  )
}

export default SideBar