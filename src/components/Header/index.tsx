import React, { useState, useEffect } from 'react';
import { HeaderPage, DivListItens, DivHeader, ButtonLogon } from "./styles";
// import { IUser } from '../../api/api';
// interface Props {
//     name?: IUser
// }

const InitialPage = () => {
    const [dataHora, setDataHora] = useState(new Date());
    // const [username, setUsername] = useState(name?.username)

    

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDataHora(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const dia = dataHora.getDate();
    const mes = dataHora.getMonth() + 1;
    const ano = dataHora.getFullYear();
    const hora = dataHora.getHours();
    const minutos = dataHora.getMinutes();
    const segundos = dataHora.getSeconds();
    const dataHoraFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;

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
                        <li></li>
                        <li>{dataHoraFormatada}</li>
                        <ButtonLogon href="/">Sair</ButtonLogon>
                    </ul>
                </nav>
            </DivListItens>
        </HeaderPage>
    );
}


export default InitialPage;
