import {styled} from "styled-components"

export const Table = styled.table`
    border-collapse: collapse;
    text-align:center;
    & thead tr:nth-child(odd){
        background-color:#EBEBEB;
    }
    & th{
        background-color:#D9D9D9;
        padding:2px;
    }
    & td{
        padding: 6px 0;
    }
    width:100%;
    margin-top:1.4em;

`

export const Container = styled.div`
    display: flex;
    width:100%;
    min-height: 100vh;
`

export const ContainerData = styled.div`
    padding: 2em;
    width:100%;
`

export const Titulo = styled.h3`
    font-weight: 600;
    margin-bottom: 2em;
`
export const Input = styled.input`
    border-radius: 5px;
    border: 1px solid #7E7B7B;
    padding: 5px 7px;
    text-transform: capitalize;
`

export const Form = styled.form`
    display: flex;
    align-items:end;
    flex-wrap: wrap;
    gap: 1rem;
    & label {
        font-size: 14px;
        color: #4D4A4A;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`

export const Submit = styled.button`
    border-radius: 4px;
    background: #1F92D2;
    width: 266px;
    height: 40px;
    flex-shrink: 0;
    cursor: pointer;
    color: #fff;
    border:0;
    display: flex;
    align-items:center;
    justify-content:center;
    gap:10px;
`

export const DivBottom = styled.div`
    margin-top: 2em;
    & h3{
        margin-bottom:1em;
    }
`

export const ButtonIcon = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
`
export const DivButtonIcon = styled.div`
    display: flex;
    gap:1em;
    justify-content: center;
`