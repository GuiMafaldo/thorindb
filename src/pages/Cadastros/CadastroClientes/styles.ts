import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin: 180px 0 0 280px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Helvetica;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  color: #333;
  font-size: 2em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;


  & .client-name {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-bottom: 30px;

        Input {
            width: 400px;
            margin-right: 40px;
        }



        & .name {
            margin-top: -17px;
            margin-right: -50px;
        }

        & .name-secondary {
            margin-top: -17px;
            margin-right: -90px;
        }
  }

  & .email-and-tel {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;

    & .email-input {
        width: 360px;
        margin-left: 40px;
    }

    & .tel-input{
        width: 180px;
        margin-right: 40px;
        margin-left: -65px;
    }
    
    & .tel {
      margin-top: -17px;
    }
    & .email {
      margin-top: -17px;
      margin-right: -90px;
    }
  }

  & .rua-and-num {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;

    & .rua-input {
        width: 400px;
        margin-right: 40px;
        margin-left: -92px;
    }

    & .num-input {
        width: 80px;
        margin-right: 40px;
    }

    & .num {
      width: 50px;
      margin-top: -17px;
      margin-right: -50px;
    }

    & .logradouro {
        width: 90px;
        margin-top: -17px;
    }
  }

  & .cidade-and-estado {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-bottom: 30px;

    & .city-input {
        width: 300px;
        margin-right: 40px; 
    }

    & .state-input {
        width: 300px;
        margin-right: 40px;
    }

    & .city {
      width: 50px;
      margin-top: -17px;
      margin-right: -50px;
    }
    & .state {
      width: 50px;
      margin-top: -17px;
      margin-right: -52px;
    }
  }

  & .bairro-and-cep {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;

    & .bairro-input {
        width: 200px;
        margin-right: 40px;
    }

    & .cep-input {
        width: 200px;
        margin-right: 40px;
    }

    & .bairro {
      width: 50px;
      margin-top: -17px;
      margin-right: -50px;
    }
    & .cep {
      width: 50px;
      margin-top: -17px;
      margin-right: -52px;
    }
  }
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

  a {
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      background-color: #000;
      color: white;
      font-size: 14px;
      cursor: pointer;
      text-decoration: none;
        
      &:hover {
            background-color: #fff;
            color: #000;
        }
    
  }
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

