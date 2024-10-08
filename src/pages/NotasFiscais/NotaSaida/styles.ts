import styled from "styled-components";

export const ButtonBackMenu = styled.div`
  display: flex;
 

  > button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      margin-right: 10px;
      width: 80px;
      height: 30px;
      padding: 6px;
      background-color: #000;
      border: none;
      border-radius: 6px;
      

      & .backMenu{
          color: #fff;
          font-family: Helvetica;
          text-decoration: none;
      }
  }
`

export const DanfeContainer = styled.div`
  max-width: 900px;
  height: 100vh;
  margin: 0 auto;
  padding: 40px;
  background-color: white;
  border: 2px solid black;
  font-family: Arial, sans-serif;
  font-size: 12px;
  line-height: 1.4;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
`;

export const CompanyInfo = styled.div`
  text-align: left;
  width: 50%;
  
  h3 {
    font-size: 1rem;
    margin: 0;
  }
  
  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

export const NfeInfo = styled.div`
  text-align: right;
  width: 50%;
  
  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

export const NaturezaOperacao = styled.div`
  margin: 10px 0;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`;

export const TableContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid black;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid black;
    padding: 5px;
    text-align: left;
    font-size: 0.8rem;
  }

  th {
    background-color: #f2f2f2;
  }

  td {
    text-align: center;
  }
`;

export const CaculoImposto = styled.div`
  margin-top: 10px;
  border: 1px solid black;
  padding: 5px;
`;

export const DadosProduto = styled.div`
  margin-top: 10px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;
