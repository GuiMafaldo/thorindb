import styled from 'styled-components';

export const ContainerContent = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
    background: linear-gradient(to right, #e3e3e3, #f9f9f9);
        

        a {
            display: flex;
            margin-top: 20px;
            margin-left: 570px;
            width: 80px;
            text-decoration: none;
            color: #000;
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
            font-family: Helvetica;
        }
     
`
export const TableWrapper = styled.div`
  width: 660px;
  margin: 0 auto;
  overflow-x: auto;
  font-family: Helvetica;
  


  > div {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 6px;
            
        input {
                display: flex;
                flex-direction: row-reverse;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 1em;
                margin-right: 2px;
                margin-top: 20px;
                width: 300px;
                height: 40px;
            }

            button{
                background-color: #000;
                color: #fff;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                font-size: 1em;
                cursor: pointer;
                font-family: Helvetica;
            }
  }

  h1 {
    font-size: 2.3em;
    font-family: Helvetica;
    text-align: center;
    margin-bottom: 60px;
    margin-top: 60px;
  }
`;

export const Table = styled.table`
  width: 100%
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1em;
  text-align: left;
`;

export const TableHead = styled.thead`
  background-color: #f4f4f4;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
  background-color: #000;
  color: white;
`;

export const TableData = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
`;