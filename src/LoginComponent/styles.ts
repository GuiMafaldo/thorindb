import styled from "styled-components";


export const HeaderLogin = styled.div`
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    height: 80px;
    margin-top: 180px;
    background-color: #000;
    max-width: 350px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;


    h2 {
        color: #fff;
        font-size: 28px;
        font-family: Helvetica;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
`
export const DivContainer = styled.div`
    max-width: 350px;
    width: 100%;
    display: block;
    margin: 0 auto;
    text-align: center;
    background-color: #e3e3e3;
    padding-top: 37px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    font-family: Helvetica;

`

export const DivForm = styled.div`
    a {
        font-size: 12px;
        margin: 0;
        margin-bottom: 26px;
        color: #000;
        text-decoration: none;
        

        span{
            color: blue;
            text-decoration: underline;
        }
    }

    & .button{
        padding: 10px;
        width: 120px;
        background-color: rgba(0, 0, 0, 0.9);
        color: #fff;
        cursor: pointer;
        text-decoration: none;
        font-weight: 600;
        border-radius: 6px;
        margin: 0 auto; 
`

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 55%;
    margin: 0 auto;
    margin-bottom: 10px;
    gap: 10px;

    input {
        padding: 10px;
        border: none;
        border-radius: 6px;
    }
`

export const SelectIdioma = styled.div`
    display: flex;
    justify-content: space-between;


    h4{
        margin-top: 66px;
        margin-left: 30px;
        padding-bottom: 20px;

        span {
            color: blue;
            margin-left: 4px;
            font-weight: 600;
        }
    }

    select {
        height: 25px;
        margin-top: 60px;
        margin-left: 60px;
        margin-right: 4px;
    }

    img{
        height: 25px;
        margin-top: 60px;
        margin-right: 70px;
    }
`
