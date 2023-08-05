import {styled} from "styled-components"
import { Div } from "../cadastroDeProdutos/cadastroProdutos.style"

export const Flex = styled.div`
    display:flex;
    align-items: center;
    gap: 2em;
    & button{
        transform: translateY(2%);
        cursor: pointer;
        padding: 0 3em;
    }

`

export const DivVendas = styled(Div)`
    width: 100%;
    & table tbody tr td button{
        border:0;
        background-color: #197AD2;
        padding: .5em 3em;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        float: right;
        
    }
`

export const ContainerProductVenda = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    box-shadow: 3px 4px 8px 2px rgba(0, 0, 0, 0.25);
    width: 100%;
    padding: 1em;
    border-radius: 6px;
    margin-top: 3em;
    & p{
        align-self: flex-end;
        font-weight: 600;
    }
`
export const ProductVenda = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    border-radius: 6px;
    box-shadow: 3px 4px 8px 2px rgba(0, 0, 0, 0.25);
    & button {
        background-color: transparent;
        font-size: 1.8em;
        border:0;
        cursor: pointer;
    }
`

export const Buttons = styled.div`
    display: flex;
    gap:1em;
    & button{
        padding: 7px 1em;
        border-radius: 6px;
        border:0;
        color:#fff;
        cursor: pointer;
    }
    & :first-child{
        background-color:#2CA948;
    }
    & :last-child{
        background-color:#B81935;
    }

`

export const ItemProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
`

export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 3em;
`