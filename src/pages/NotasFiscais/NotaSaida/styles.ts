import styled from "styled-components"

interface TabProps {
  active: boolean;
}

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  margin-left: 10px;
  margin-top: 20px;
`


export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #000;
  font-family: Helvetica;
  
    & .exit{
        color: red;
      }
      & .condicao{
        color: green;
      }
  `
  
  export const StatusText = styled.span`
  `
  export const StyleTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;

    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f4f4f4;
    }

    tr:hover {
      background-color: rgba(240, 240, 240, 0.5);
  }
`;

export const TotalRow = styled.tr`
  font-weight: bold;
  background-color: #f9f9f9;
`;
  
  export const Card = styled.div`
  width: 1630px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const CardContent = styled.div`
  padding: 24px;
`

export const Grid = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 24px;
`

export const Row = styled.div`
  display: flex;
  gap: 16px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #000;
  color: white;
  margin-top: 22px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #2563eb;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Th = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 2px solid #e5e7eb;
`

export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #e5e7eb;
`

export const ActionBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px;
  background-color: #f3f4f6;
`
export const HeaderContainer = styled.header`
  width: 85vw;
  height: 20vh;
  background-color: rgba(0, 0, 0 ,0.1);
  color: white;
  padding: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: Helvetica; 
  margin-bottom: 16px;
  text-align: center;
  color: #000;
`

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TabList = styled.div`
  display: flex;
  gap: 8px;
`

export const Tab = styled.button<TabProps>`
  background-color: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? 'black' : 'black'};
  border: none;
  padding: 8px 14px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  font-family: Helvetica;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: all ease 0.1s;

  &:hover {
    background-color: ${props => props.active ? 'rgba(0, 0, 0, 0.2)' : ''};
    color: #fff;
  }
`