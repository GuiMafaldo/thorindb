import styled from "styled-components";

export const ContainerGeral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  margin-left: 200px;
  height: 40vh;
`;

export const ContainerForm = styled.div`
  background-color: #ffffff;
  height: auto;
  width: 60vw;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
  padding: 20px;
`;

export const Colaboradores = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h3 {
    font-size: 28px;
    font-family: "Helvetica", sans-serif;
    color: #333;
    margin-bottom: 20px;
  }

  & .title-and-back {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

    a {
      font-size: 14px;
      text-decoration: none;
      color: #000;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #0056b3;
      }
    }
  }
`;

export const FormDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30vh;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Espaçamento entre os campos */

    & .numbers-type {
      display: flex;
      flex-direction: column;
    }

    & .num-type {
      width: 80px;
    }

    & .num-type-tel {
      width: 200px;
    }
  }

  input {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #333;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
    }
  }

  button {
    width: 100%;
    max-width: 180px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: #000;
    margin-top: 10px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
