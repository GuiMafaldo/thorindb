import React, { useState } from 'react';
import { HeaderPage, DivListItens, DivHeader, ButtonLogon } from "./styles";
import { useDataHora } from "../../utils/funcoes/dataHora";
import config from '../../assets/image/config.png'
import right from '../../assets/image/rightSeta.png'
import dash from '../../assets/image/traco.png'


const InitialPage: React.FC = () => {
    const [menuSettings, setMenuSettings] = useState<Boolean>(false);
    const [contact, setContact] = useState<Boolean>(false)
    const [configuration, setConfiguration] = useState<Boolean>(false)
    const [rotateConfig, setRotateConfig] = useState<Boolean>(true)
    const [rotateSup, setRotateSup] = useState<Boolean>(false)

    const hanldeOpenSettings = (e: React.MouseEvent) => {
        e.preventDefault()
        setMenuSettings(!menuSettings)
    }
    const handleOpenContact = (e: React.MouseEvent) => {
        e.preventDefault()
        setContact(!contact)
        setRotateSup(!rotateSup)
        console.log(rotateSup)
    }
    
    const handleOpenConfiguration = (e: React.MouseEvent) => {
        e.preventDefault()
        setRotateConfig(!rotateConfig)
        setConfiguration(!configuration)   
    }

    const dataHora = useDataHora()
    const getUserName = localStorage.getItem('userName');
    
    return (
        <HeaderPage>
            <DivHeader>
                <img style={{position: 'relative', cursor: 'pointer'}} onClick={hanldeOpenSettings} src={config} alt="Logo engrenagem" />
                {menuSettings ? (
                    <div 
                        className='menuOpen' 
                        style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            backgroundColor: '#f9f9f9', 
                            padding: '10px', 
                            width: '160px', 
                            height: '200px', 
                            gap:'10px',
                            position: 'absolute',
                            top: '10px',
                            left: '50px',
                            zIndex: '1000'
                    }}>
                        <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between', cursor: 'pointer'}}>
                            <a  style={{color: "#000", textDecoration:"none"}}>Minimizar</a>
                            <img onClick={hanldeOpenSettings} style={{height: "16px", marginTop: '3px', width: "16px"}} src={dash} alt="icone traço" />
                        </div>   

                        <hr  style={{height : '1px', width: '100%', backgroundColor: '#c9c9c9', border: 'none'}}/>
                        <div onClick={handleOpenConfiguration} style={{display: 'flex', gap: '10px', justifyContent: 'space-between', cursor: 'pointer'}}>
                            <a style={{color: "#000", textDecoration:"none", cursor: 'pointer'}} >Configurações</a>
                            <img onClick={handleOpenConfiguration} className={`image-rotacao-config ${rotateConfig ? 'rotate-config' : ''}`} style={{marginTop: "3px", height:"14px", width: '14px'}} src={right} alt="icone seta direita" />
                        </div>

                        <div onClick={handleOpenContact}  style={{display: 'flex', gap: '10px', justifyContent: 'space-between', position: 'relative', cursor: 'pointer'}}>
                            <a style={{color: "#000", textDecoration:"none"}}>Suporte</a>
                            <img onClick={handleOpenContact} className={`image-rotacao-sup ${rotateSup ? 'rotate-sup' : ''}`}  style={{marginTop: "3px", height:"14px", width: '14px'}} src={right} alt="icone seta direita" />
                            {contact ? (
                                <div 
                                    style={{
                                        backgroundColor: '#f9f9f9', 
                                        padding: '10px', 
                                        width: '200px', 
                                        height: '200px', 
                                        gap:'10px',
                                        position: 'absolute',
                                        left: "151px",
                                        top: '10px',
                                        textAlign: 'center',
                                    
                                    }}>
                                <p style={{color: "#000", marginBottom: "10px", marginTop: "10px", fontFamily:"Helvetica" }}>Contatos</p>
                                <hr  style={{height : '1px', width: '100%', backgroundColor: '#c9c9c9', border: 'none', marginBottom: "10px"}}/>
                                <span 
                                    style={{
                                        fontSize: "12px", 
                                        padding: "8px",
                                        fontFamily:"Helvetica" }}>E-email: 
                                        <a style={{color: "blue"}} 
                                            >suport@email.com
                                        </a>
                                </span>
                                <hr  style={{height : '1px', width: '100%', backgroundColor: '#c9c9c9', border: 'none', marginBottom: '20px', marginTop: "10px"}}/>
                                <span 
                                    style={{
                                        fontSize: "12px", 
                                        fontFamily:"Helvetica" }}>Tel: 
                                        <a style={{color: "blue"}} 
                                            >+55 (11) 99999-9999
                                        </a>
                                </span>
                                <hr  style={{height : '1px', width: '100%', backgroundColor: '#c9c9c9', border: 'none', marginTop: "10px", marginBottom: "20px"}}/>
                                <a 
                                    style={{color: "#000", 
                                    fontFamily:"Helvetica" }} 
                                    onClick={handleOpenContact} 
                                    href="/">Fechar
                                </a>
                            </div>
                            ): ("")}
                            
                        </div>

                        <hr  style={{height : '1px', width: '100%', backgroundColor: '#c9c9c9', border: 'none'}}/>
                        <a style={{color: "#000", textDecoration:"none"}} href="">Exibir infomações</a>
                        <hr  style={{height : '1px', width: '100%', backgroundColor: '#c9c9c9', border: 'none'}}/>
                        <a onClick={hanldeOpenSettings} style={{color: "#000", textDecoration:"none"}} href="">Sair</a>
                    </div>
                ) : (
                
                "")}
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
