import {styled} from "styled-components"

export const Salvar = styled.button`
   background-color: #4BB575;
   padding: .6em 4em;
   border:0;
   border-radius: 6px;
   color: #fff;
   margin-top: 2em;
   cursor: pointer;
`
export const Cancelar = styled(Salvar)`
    background-color:transparent;
    border: 2px solid #DB4862;
    color: #DB4862;
`

export const DivButtons = styled.div`
    display: flex;
    gap: 1em;
`