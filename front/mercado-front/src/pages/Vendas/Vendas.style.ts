import {styled} from "styled-components"

export const HeaderVendas = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    & button {
        padding: 10px 2em;
        border:0;
        border-radius: 5px;
        font-weight: 600;
    }
    & :first-child{
        background-color: #F9B636;
    }
    & :last-child{
        background-color:#4BB575;
    }

`
export const Pesquisar = styled.button`
    border:0;
    padding: 0 2em;
    border-radius: 5px;
    height: 3em;
    transform:translateY(50%);
    background-color:#197AD2;
    font-weight:600;
    color: #fff;
    cursor: pointer;
`
export const Limpar = styled(Pesquisar)`
    background-color: transparent;
    border: 1px solid #F9B636;
    color: #000;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    box-shadow: 2px 4px 7px 0px rgba(0, 0, 0, 0.25);
    width: 300px;
    margin-top:2em;
    border-radius: 5px;
`
export const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
    & :last-child{
        background-color: #4BB575;
        padding: 5px;
        border-radius: 5px;
    }
    & ~ div button{
        background-color: #B81935;
        padding: 5px 35px;
        border: 0;
        border-radius: 5px;
        color:#fff;
        cursor: pointer;
        margin: 1em 0;
    }
`

export const CardContent = styled.div`
    box-shadow: 2px 4px 7px 0px rgba(0, 0, 0, 0.25);
    padding: 7px;
    border-radius: 5px;
    margin: .6em 0;
`

export const ContainerCard = styled.div`
    display: flex;
    flex-wrap: wrap;
`