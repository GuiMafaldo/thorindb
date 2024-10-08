import styled from "styled-components";


export const ContainerGrid = styled.div`
    width: 1640px;
    height: 90vh;
    display: flex;
    margin: 0 auto;
    margin-top: 40px;
    border: 1px solid #000;
`
export const ContentForm = styled.div`
    width: 1440px;
    margin: 0 auto;
`
export const FirtMenuCad = styled.div`
    width: 100vw;
    height: 78vh;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;


    h3 {
        font-size: 2em;
        font-family: Helvetica;
        text-align: center;
        margin-bottom: 40px;
        margin-top: 20px;
    }

    form {
        display: block;
        flew-direction: column;
        width: 500px;

        & .name-and-cnpj{
            display: flex;
            flex-direction: row;
            margin-bottom: 20px;
            gap: 20px;
        }

        & .email-and-tel{
            display: flex;
            width: 100%;
            gap: 120px;
            margin: 0 auto;
            justify-content: space-between;

            & .id-empresa{
                width: 120px;
            }
        }

        & .city-and-rua{
            display: flex;
            width: 100%;
            gap: 20px;
            margin: 0 auto;
            justify-content: space-between;
        }

        & .cep-and-number{
            display: flex;
            width: 100%;
            gap: 20px;
            margin: 0 auto;

            & .number-forn{
                width: 100px;
                height: 35px;
                margin-top: 18px;
            }
        }

        & .description-and-button{
            display: flex;
            width: 1640px;
            flex-direction: row;
            justify-content: space-between;

            img {
                width: 200px;
            }

            & .button-cad{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-right: 100px;


                & .voltar{
                    background-color: #000;
                    color: #fff;
                    text-decoration: none;
                    padding: 7px;
                    border-radius: 4px;
                    margin-left: 10px;
                }
            }
        }


        input{
            width: 440px;
            padding: 8px;
            border: 1px solid #000;
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