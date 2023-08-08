import {styled} from "styled-components"

export const DivButtons = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2em;
`

export const Button = styled.button`
        border: 0;
        border-radius: 6px;
        flex: 1;
        align-items: center;
        font-size: 20px;
        padding: 1em 0;
        cursor: pointer;
        background-color:#4BB575;
`

export const Button2 = styled(Button)`
    background-color:#DB4862;
`

export const Button3 = styled(Button)`
    background-color:#F9AC3A;
`
