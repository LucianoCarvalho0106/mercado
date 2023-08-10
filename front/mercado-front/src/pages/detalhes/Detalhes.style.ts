import {styled} from "styled-components"

export const DivButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
    width: 100%;
    font-weight: 600;
    flex-wrap: wrap;
`

export const ButtonELabel = styled.div`
    display: flex;
    flex-direction: column;
`

export const Verde = styled.button`
    color: #fff;
    background-color: #4BB575;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    padding: .5em 5em;
    font-size: 20px;
`

export const Vermelho = styled(Verde)`
    background-color: transparent;
    border: 2px solid #DB4862;
    color: #DB4862;
`