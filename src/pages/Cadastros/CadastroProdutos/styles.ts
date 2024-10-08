import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 10%;
  padding: 60px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: helvetica;


  .group-unit{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;


    & .formato,
    & .tipo,
    & .condicao{
        margin-top: -4px;
    }

    & .formato{
        margin-left: 26px;
    }

    & .tipo{
        margin-left: 34px;
    }

    & .condicao{
        margin-left: 42px;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.3em;
  margin-bottom: 60px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FormGroup = styled.div`
  flex: 1 1 100%;
  
  &:nth-child(-n+3) {
    flex-basis: 30%;
  }

  &:nth-child(n+4) {
    flex-basis: 48%;
  }
  
  display: flex;
  flex-direction: column;

  .sku{
    margin-left: 60px;
    margin-bottom: 0;
  }

  .precoVenda{
    margin-left: 22px;
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #3b28cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 auto;
  width: 50%;

  &:hover {
    background-color: #3b28f1;
  }
`;