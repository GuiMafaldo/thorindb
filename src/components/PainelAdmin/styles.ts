import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  padding: 60px;
  margin-left: -30px;

  & .search-form {
    display: flex;
    flex-direction: row-reverse;

      form{
      display: flex;
      left: 10px;
      margin-bottom: 10px;

      input[type="text"] {
            padding: 8px;
            margin-right: 2px;
            border: 1px solid #ddd;
            border-radius: 4px;
    }
      button{
            font-family: Helvetica;
            font-weight: bold;
            padding: 6px 12px;
            background-color: #e9e9e9;
            color: #000;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background-color: #000;
                color: #fff;
            }
        }


    }
  }

  & .open-modal {
    display: flex;
  }

  & .close-modal {
    display: none;
  }
  & .modal-content-section {
      flex-direction: column;
      position: fixed;
      top: 40px;
      left: 0;
      width: 100%;
      height: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 1540px;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;

  h1{
    font-size: 2.3em;
    font-family: helvetica;
    
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    p{
      font-size: 12px;
      background-color: #000;
      color: #fff;
      padding: 8px 10px;
      border-radius: 5px;
      fonmt-weight: bold;
      font-family: helvetica;
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 10px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;

  ul{
    & .list-subMenu{
      display: flex;
      flex-direction: column;

      a {
        color: #000;
        font-size: 18px;
        margin-bottom: 14px;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
  font-family: helvetica;
  text-decoration: underline;
`;

export const QuickDraft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #011;
  }
`;

export const SectionContent = styled.section`
    text-align: center;
    width: 660px;
    margin: 0 auto;
    margin-top: 60px;
    font-family: helvetica;

    & .search-client {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin: 0 auto;

        select {
            padding: 7px;
            margin-right: 2px;
            border-radius: 4px;
        }

        input[type="text"] {
            padding: 8px;
            margin-right: 2px;
            margin-bottom: 6px;
            border: 1px solid #ddd;
            border-radius: 4px;
    }

        button{
            font-family: Helvetica;
            font-weight: bold;
            padding: 9px 12px;
            background-color: #e9e9e9;
            color: #000;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background-color: #000;
                color: #fff;
            }
        }
    }

    & .title-and-close {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px;
        
        h1 {
            font-size: 2em;
            font-family: helvetica;
        }

        p{
            font-size: 30px;
            background-color: #f9f9f9;
            height: 40px;
            width: 30px;
            cursor: pointer;
        }
    }
    
`
export const ContainerPainel = styled.section`
    width: 660px;
    height: 50vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #e9e9e9;
    padding: 10px;
    
   
        
        & .modal-content {
            display: flex;
            flex-direction: column;
            width: 100%;
            border: 1px solid #000;
            margin: 0 auto;
            margin-bottom: 20px;

            & .modal-content-item {
                display: flex;
                justify-content: space-between;
                
            }

            p {
                padding: 10px;
            }
        }

 

`
