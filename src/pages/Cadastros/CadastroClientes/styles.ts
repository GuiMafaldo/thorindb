import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color: #555;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #000;
  color: white;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #000;
  }
`;

