import {styled} from "styled-components"


export const Container = styled.div`
    width: 33%;
    background-color: #1F92D2;
    color: #fff;
    height: auto;
    padding-top:1em;
    transition: width .5s;
    
    @media (max-width:1215px){
        span{
            display: none;
        }
        width: 80px;
        h1{
            text-align: left;
            padding-left: 5px;
        }
    }


    & h3{
        margin: 2em 0;
        padding-left: 10px;
    }
    & img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
        margin: 10px;
    }

`


export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 4px;
    & button{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
        background-color:transparent;
        border: none;
        color:#fff;
        cursor: pointer;
        transition: 0.4s;
        padding: 5px;
        padding: 12px 12px 12px 14px;
        font-size: 16px;
    }
    & button:hover{
        background-color:#3BA7E3;
    }
`

