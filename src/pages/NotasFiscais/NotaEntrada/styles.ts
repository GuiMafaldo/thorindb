import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Helvetica;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
`;

export const SectionTitle = styled.h3`
  margin-top: 20px;
  color: #555;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box; /* Inclui padding e border no cálculo da largura */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    color: #333;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: #000;
  color: white;
  cursor: pointer;
`;