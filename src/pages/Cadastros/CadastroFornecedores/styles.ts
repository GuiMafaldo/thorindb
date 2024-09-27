import styled from "styled-components";


export const ContainerGrid = styled.div`
    background-color: #737373;
    width: 98vw;
    height: 100vh;
    text-align: center;
    margin-top: -32px;
    display: flex;
    flex-direction: column;

`

export const GridLayout = styled.div`
    width: 90vw;
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #e3e3e3;
    text-align: left;
}
`

export const FirtMenuCad = styled.div`
    width: 40vw;
    height: 78vh;
    background-color: #e9e9e9e9;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 4px 4px 4px;
    border-radius: 8px;


    h3 {
        font-size: 2em;
        font-family: Helvetica;
    }

    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        width: 100%;
        margin-top: 100px;


        input{
            width: 400px;
            padding: 8px;
            border-radius: 8px;
            margin-bottom: 6px;
        }

        label {
            font-family: Helvetica;
            font-weight: 600;
            font-size: 1em;
        }



        textarea{
            width: 410px;
            height: 16vh;
            resize: none;
            border-radius: 4px;
        }
    }

    & .cep-and-number {
        display: flex;
        align-items: center;


        & .number-forn {
            margin: 0 auto;
            margin-bottom: -11px;
            margin-left: 10px;
            width: 40px;
            height: 14px;
        }
    }


    button {
        padding: 8px;
        border: none;
        border-radius: 4px;
        background-color: #000;
        color: #fff;
        font-weight: 700;
        font-family: Helvetica;
        margin-top: 20px;
        margin-bottom: 20px;
        cursor: pointer;
    }
`