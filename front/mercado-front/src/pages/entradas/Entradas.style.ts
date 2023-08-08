import {styled} from "styled-components"

export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
export const ContainerButtons = styled.div`
    display: flex;
    gap:1em;
    & button{
        padding: .7em 2.5em;
        border:0;
        border-radius: 6px;
        font-weight: 600;
    }
    & :first-child{
        background-color:#F9B636;
    }
    & :last-child{
        background-color: #4BB575;
    }
`

export const Button = styled.button`
    border:0;
    border-radius: 6px;
    padding: 0 3em;
    cursor: pointer;
    font-weight: 600;
    height: 3em;
    transform: translateY(50%);
    background-color:#197AD2;
    color:#fff;
`