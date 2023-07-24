import { styled } from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    gap: 2em;
`

export const Button1 = styled.button`
    width: 400px;
    border:none;
    border-radius: 10px;
    background: linear-gradient(159deg, rgba(106, 223, 249, 0.70) 0%, #197AD2 100%);
    width: 352px;
    height: 100px;
    flex-shrink: 0;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    color: #FFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content:center;
    gap:10px;
    box-shadow: 3px 1px 8px  rgba(0,0,0,0.4);
`

export const Button2 = styled(Button1)`
    background: linear-gradient(159deg, #F96A6A 0%, rgba(245, 54, 28, 0.27) 100%);

`

export const Button3 = styled(Button1)`
    background: linear-gradient(159deg, #F98836 0%, rgba(227, 208, 158, 0.90) 100%);

`

export const Button4 = styled(Button1)`
   background: linear-gradient(161deg, rgba(45, 212, 112, 0.50) 0%, #1D8834 100%);
`

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
`