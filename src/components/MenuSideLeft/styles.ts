import styled from "styled-components";

export const DivGeral = styled.div`
    margin-left: -4px;
    width: 100%;
    height: 70vh;   

    > img {
        width: 220px;
        aspect-ratio: 4/3;
        object-fit: contain;
        mix-blend-mode: color-burn;
    }
   

    h3 {
        font-family: helvetica;
        margin-left: 45px;
        margin-bottom: 30px;
    }

    nav {
        background-color: #d9d9d9;
        max-width: 220px;
        height: 76vh;
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
            }
        }
    }
`
export const SubMenuOpen = styled.div`
    & .list-subMenu {
        text-decoration: underline;
        color: #000;
        font-weight: 500;
        font-family: Helvetica;
        margin-top: 8px;
    }
`