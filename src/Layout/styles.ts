import styled from "styled-components";

export const ContainerPageCentral = styled.div`
    display: flex;
    margin: 0 auto;
    width: 100%;


    & .aside-and-content {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        gap: 10px;
    }
`