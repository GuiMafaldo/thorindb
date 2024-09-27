import styled from "styled-components"

export const HeaderPage = styled.header`
    background-color: #d9d9d9;
    width: 100%;
    margin: 0 auto;
    
`

export const DivHeader = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: flex-start;


    img{
        width: 20px;
        height: 20px;
        margin-left: 20px;
        margin-top: 26px;
    }


    h1{
        display: flex;
        margin-left: 20px;
        margin-top: 23px;
        font-family: helvetica;
        font-size: 22px;
    }
`

export const DivListItens = styled.div`
    display: flex;
    justify-content: flex-end;


    ul{
        display: flex;
        margin-top: -30px;

        li{
            display: flex;
            list-style:none;
            margin-right: 20px;
        }
    }
`

export const ButtonLogon = styled.a`
    background-color: #000;
    color: #fff;
    font-weight: 700;
    font-family: Helvetica;
    padding: 6px;
    border-radius: 6px;
    margin-top: -8px;
    margin-right: 20px;
    width: 60px;
    text-align: center;
    text-decoration: none;

`