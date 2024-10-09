import styled from "styled-components"

interface TabProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 91vw;
  margin: 0 auto;
  margin-left: -100px;

   h1 {
    margin: 0 auto;
  }

`

export const Header = styled.div`
  background-color: #e9e9e9;
  color: #000;
  padding: 26px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const Table = styled.table`
  width: 1640px;
  border-collapse: collapse;
  font-size: 12px;
`

export const Th = styled.th`
  background-color: #e0e0e0;
  padding: 5px;
  text-align: left;
  border: 1px solid #ccc;
`

export const Td = styled.td`
  padding: 5px;
  border: 1px solid #ccc;
`

export const Footer = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 12px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  cursor: pointer;
  
  &:hover {
    background-color: #d0d0d0;
  }
`