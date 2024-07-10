import styled from "styled-components";

export const ContainerGeral = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #737373;
    height: 100vh;
    width: 100vw;
`


export const ContainerForm = styled.div`
    background-color: #e3e3e3;
    height: 90vh;
    width: 60vw;
    border-radius: 9px;
    box-shadow: 4px 3px 3px 4px;
`

export const Colaboradores = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    

    h3 {
        font-size: 32px;
        font-family: Helvetica;
        color: blue;
    }


    & .title-and-back {
        display: flex;
        align-items: center;
        margin-left: 200px;
        gap: 100px;

        Link {
            font-size: 14px;
            text-decoration: underline;
            color: blue;
            cursor: pointer;
        }
    }
`

export const FormDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    width: 100%;

    form {
        display: flex;
        flex-direction: column;


        & .numbers-type {
            display: flex;
            flex-direction: column;
        }

        & .num-type {
            width: 80px;
        }
        & .num-type-tel {
            width: 200px;
        }
    }


    input {
        width: 400px;
        padding: 8px;
        border-radius: 4px;
        margin-bottom: 6px;
    }
`