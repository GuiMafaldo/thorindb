import styled from "styled-components";

export const ContainerGeral = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    background-color: #696969;
`

export const FormList = styled.div`
    width: 55vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 120px;
    background-color: #e3e3e3;
    border-radius: 8px;
    box-shadow: 4px 3px 3px 4px;

    label {
        font-family: Helvetica;
    }


    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        width: 100%;

        input {
            width: 400px;
            padding: 8px;
            border-radius: 8px;
            margin-bottom: 6px;
        }

        & .client-state {
            display: flex;
            margin-bottom: 20px;

            label{
                margin-left: 10px;
            }

            > div {
                
                 & .state{
                    width: 150px;
                 }

                 & .city{
                    margin-left: 10px;
                    width: 200px;
                 }
            }
        }


        & .client-home {
            display: flex;
            margin-bottom: 20px;
            

            & .label-num{
                & .num{
                    width: 50px;
                }   
            }

            & .label-city{
                & .rua{
                    width: 200px;
                }   
            }
            

            & .label-city, & .label-num {
                display: flex;
                flex-direction: column;
                margin-right: 10px;

            }

            & .num-class-home{
                width: 50px;
            }
            
            
            input {
                width: 100px;
            }
            
            
        }

        & .client-bairro {
            label{
                margin-left: 10px;
            }
            display: flex;
            > div {
                & .bairro{
                    width: 200px;
                }

                & .cep{
                    margin-left: 10px;
                    width: 200px;
                }
            }
        }

        button{
            align-self: center;
            padding: 10px;
            width: 100px;
            cursor: pointer;
            margin-top: 16px;
        }
    }


    h3 {
        color: blue;
        font-size: 32px;
        font-family: Helvetica;
        
    }

    & .title-and-back {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 160px;
        font-family: Helvetica;

        > h3 {
            margin-left: 80px;
        }


        & .link-back {
            margin-left: 220px;
        }
    }

    & .num-class-id {
        width: 50px;
        display: flex;
    }
    & .num-class-tel {
        width: 200px;
        display: flex;
    }
    & .num-class-cep {
        width: 180px;
        display: flex;
    }
`