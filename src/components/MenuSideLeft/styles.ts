import styled from "styled-components";

export const DivGeral = styled.div`
    margin-left: -4px;
    width: 100%;
   

    h3 {
        font-family: helvetica;
        margin-left: 45px;
        margin-bottom: 30px;
    }

    nav {
        background-color: #d9d9d9;
        max-width: 220px;
        height: 100vh;
        padding-top: 10px;
        margin-left: 1px;
        
        ul{
            display: flex;
            flex-direction: column;
            
            li{
                padding: 2px;
                list-style: none;
                margin-bottom: 8px;
                cursor: pointer;
                
                a {
                    text-decoration: none;
                    color: #000;
                    font-family: sans-serif;
                    margin-top: 10px;
                }
            }
        }
    }

    img {
        margin-bottom:-4px;
    }
`
export const SubMenuOpen = styled.div`


    & .list-subMenu {
        text-decoration: underline;
        color: blue;
        font-weight: 500;
        font-family: Helvetica;
        margin-top: 8px;

        & .subMenu {
            color: blue;
        }
    }
`