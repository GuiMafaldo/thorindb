import React from "react";
import { ContainerPainel} from "./styles";

const NewsAndAtualizações = () => {
    return (
        <ContainerPainel>
            <div>
            <h2>Noticias da semana</h2>
            <div>
                <img src="/image/carousel1.jpg" alt="imagem" />
                <h4>Titulo noticia</h4>
                <p>Lorem ipsum</p>
            </div>
        </div>
        <div>
            <h2>Atualizações</h2>
            <div>
                <img src="/image/carousel1.jpg" alt="imagem" />
                <img src="/image/carousel2.jpg" alt="imagem" />
                <img src="/image/carousel3.jpg" alt="imagem" />
            </div>
        </div>
        </ContainerPainel>
    )
}

export default NewsAndAtualizações;