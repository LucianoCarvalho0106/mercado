import { useEffect, useState } from "react"
import SideBar from "../../components/sideBar"
import { Container, ContainerData, Titulo } from "../cadastroDeProdutos/cadastroProdutos.style"
import {DivButtons,ButtonELabel,Verde,Vermelho,Liquido} from "./Detalhes.style"
import axios from "axios"


const Detalhes = () => {

    const [entradas,setEntradas] = useState<any>([])
    const [saidas,setSaidas] = useState<any>([])

    const EntradasDetalhe = async()=>{
        const data = (await axios.get("https://mercado-black.vercel.app/vendas")).data
        setEntradas(data)
    }

    const SaidasDetalhe = async()=>{
        const data = (await axios.get("https://mercado-black.vercel.app/saidas")).data
        setSaidas(data.dataSaidas.totalValorSaidas)
    }

    const entradasReduce = entradas.map((item: { preco: number; quantidade: number })=> item.preco).reduce((acc: any,curr: any)=>acc+curr,0)


    useEffect(()=>{
        EntradasDetalhe()
        SaidasDetalhe()
    },[])
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
                    <Verde id="entradas">R$: {entradasReduce.toFixed(2)}</Verde>
                </ButtonELabel>
                <ButtonELabel>
                    <label htmlFor="Saidas">Saidas</label>
                    <Vermelho id="Saidas">R$: {Number(saidas).toFixed(2)}</Vermelho>
                </ButtonELabel>
                <ButtonELabel>
                    <label htmlFor="liquido">Liquido</label>
                    <Liquido id="liquido">R$: {Number(entradasReduce - saidas).toFixed(2)}</Liquido>
                </ButtonELabel>
            </DivButtons>
        </ContainerData>
    </Container>
  )
}

export default Detalhes