import { useEffect, useState } from "react";

export const useDataHora = (): string => {
    const [dataHora, setDataHora] = useState(new Date());

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
   
    return dataHoraFormatada;


    
}