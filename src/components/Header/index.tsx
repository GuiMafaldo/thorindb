import React from 'react';
import { HeaderPage, DivListItens, DivHeader, ButtonLogon } from "./styles";
import { useDataHora } from "../../utils/dataHora";

const InitialPage: React.FC = () => {
    const dataHora = useDataHora()
    const getUserName = localStorage.getItem('userName');
    
    return (
        <HeaderPage>
            <DivHeader>
                <img src="/image/iconeEngrenagem.png.png" alt="Logo engrenagem" />
                <h1>KepplerB</h1>
            </DivHeader>
            <DivListItens>
                <nav>
                    <ul>
                        <li>Central</li>
                        {getUserName ? (
                            <li>{getUserName}</li>
                        ): <li>Usuário não autenticado</li>}
                        <li>{dataHora}</li>
                        <ButtonLogon href="/">Sair</ButtonLogon>
                    </ul>
                </nav>
            </DivListItens>
        </HeaderPage>
    );
}


export default InitialPage;
