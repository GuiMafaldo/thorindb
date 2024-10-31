import  Barcode  from "react-barcode";
import styled from "styled-components";

const ContainerTable = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid black;


    & .container-infos{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        & .recebedor-infos{
            padding: 10px;
            
            & .receiver-name {
                width: 100%;
                padding: 4px;
            }
            & .data-infos{
                margin-top: 2px;

                & .input-data {
                    padding: 4px;
                    width: 200px;
                }

                & .input-large{
                    width:600px;
                    padding: 4px;
                }
            }
        }

        & .infos-nf {
            width: 140px;
            margin-right: 10px;
            border: 1px solid black;
            padding: 14px;
            text-align: left;
        }
    }
`

const TableBodyContent = styled.tbody`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 10px;
    width: 98%;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & .first-tird {
            width: 15%;
            padding: 8px;
            border: 1px solid black;
            border-radius: 3px;
        }

        & .secondary {
            width: 20%;
            padding: 8px;
            border: 1px solid black;
            border-radius: 3px;
        }

        & .long {
            width: 50%;
            padding: 8px;
            border: 1px solid black;
            border-radius: 3px;
        }
    }
`
const TableContainer = styled.table`
    width: 98%;
    display: flex;
    align-items: center;
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 6px;
    text-align: center;

    & .logo-and-name {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 400px;
        height: 100px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    }
    & .infos-inc {
        display: flex;
        flex-direction: column;

        > p {
            font-size: 13px;
            font-family: Helvetica;
            font-weight: 500;
        }
    }

    & .content-center {
        display: flex;
        width: 100%;
        height: 160px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        & .n-r {
            display: flex;
            justify-content: space-between;
            width: 24%;
        }

        & .saida-entrada {
            display: flex;
            flex-direction: row;
            width: 26%;

            & .one {
                border: 1px solid black;
                height: 20px;
                padding: 2px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20px;
                margin-top: 1px;
                margin-right: 30px;
            }
            
            & .content {
                width: 100%;
                display: flex;
                flex-direction: column;
                text-align: left;
            }
        }
    }

    img {
        width: 100px;
        height: 80px;
    }

    & .codigo-barras {
        width: 50%;
        border: 1px solid black;
        padding: 10px;
        border-radius: 5px;

        > Barcode {
            height 10px; 
        }

    }

`

const GeraNotaFiscal = () => {
  return (
    <ContainerTable>
        <div className="container-infos">
            <div className="recebedor-infos">
                <input className="receiver-name" type="text" placeholder="Nome do recebedor" />
                <div className="data-infos">
                    <input className="input-data" type="text" placeholder="Data recebimento mercadoria"  />
                    <input className="input-large" type="text" placeholder="Carimbo da empresa" />
                </div>
            </div>
            <div className="infos-nf">
                <p><strong>NF.e</strong></p>
                <p><strong>N: 0</strong></p>
                <span><strong>SÉRIE: 1</strong></span>
            </div>
        </div>
        <hr  style={{width: "98%"}} />
        <TableContainer>
            <tr className="logo-and-name">
                <img src="/image/logoKeppler.png" alt="logo" />
                <div className="infos-inc">
                    <p>Keppler.inc</p>
                    <p>Rua 10 de julho, 400</p>
                    <p>Jardim Ercilia</p>
                    <p>São Paulo -SP</p>
                </div>
            </tr>
            <div className="content-center">
                <h4>DANFE</h4>
                <p>
                    Documento auxiliar da  <br /> 
                    Nota Fiscal Eletronica 
                </p>
                <div className="saida-entrada">
                    <div className="content">
                        <span>Saida: 1</span>
                        <span>Entrada: 2</span> 
                    </div>
                     <span className="one">1</span>
                </div>
                
                <div className="n-r">
                    <p>N: 701</p>
                    <p>FL: 1</p>
                </div>
                <p><strong>SERIE: 1</strong></p>
            </div>
            <div className="codigo-barras">
                <p>Codigo de Barras</p>
                <Barcode
                    height={50}
                    width={1}
                    value={String(123456789123455)} />
            </div>
        </TableContainer>
        <TableBodyContent>
            <tr style={{border: "1px solid black", borderRadius: "5px", width: "100%", padding: "4px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <td style={{color: "red", fontFamily:"Helvetica", lineHeight: "20px", letterSpacing: "4px"}}>Lançamento efetuado a título de simples faturamento de venda para a entrega fatura</td>
            </tr>
            <div>
                <input className="first-tird" type="text" placeholder="inscrição estadual" />
                <input className="secondary" type="text"  placeholder="inscrição municipal" />
                <input className="first-tird" type="text"  placeholder="CNPJ" />
                <input className="long" type="text" placeholder="Chave de acesso da NFe - Consultar ao site www.nfefazenda.com.br" />
            </div>
            <h3 style={{marginTop: "8px"}}>DESTINATARIO/REMETENTE</h3>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                <div style={{display: "flex", justifyContent: "flex-start", width: "100%", padding: "2px"}}>
                    <input type="text" placeholder="Nome/Razão Social" style={{width: "70%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="CNPJ/CPF" style={{width: "25%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                </div>
                <input type="text" placeholder="Data de emissão" style={{width: "20%", height: "33px", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
            </div>
            <div>
                <div style={{display: "flex", justifyContent: "flex-start", width: "100%", padding: "2px"}}>
                    <input type="text" placeholder="Endereço" style={{width: "60%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Estado" style={{width: "20%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="number" placeholder="CEP" style={{width: "15%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                </div>
                <input type="text" placeholder="Data de entrega" style={{width: "20%", height: "33px", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
            </div>
            <div>
                <div style={{display: "flex", justifyContent: "flex-start", width: "100%", padding: "2px"}}>
                    <input type="text" placeholder="Minicipio" style={{width: "35%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="number" placeholder="Telefone" style={{width: "20%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="UF" style={{width: "7%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Inscrição estadual" style={{width: "33%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                </div>
                <input type="text" placeholder="Hora saida" style={{width: "20%", height: "33px", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
            </div>
            <h3 style={{marginTop: "8px"}}>FATURA</h3>
            <div>
                <input type="text" defaultValue=" Numero          Data         Valor        |" style={{width: "100%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/> 
            </div>
            <h3 style={{marginTop: "8px"}}>CALCULO DO IMPOSTO</h3>
                <div>
                    <input type="text" placeholder="Base de Calculo ICMS" style={{width: "20%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Valor do ICMS" style={{width: "20%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Base de Calculo de ICMS Instituição" style={{width: "20%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Valor do ICMS Instituição" style={{width: "20%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Valor Total do ICMS" style={{width: "20%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                </div>
                <div>
                    <input type="text" placeholder="Razão Social" style={{width: "18%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Valor do Seguro" style={{width: "18%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Desconto" style={{width: "18%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Contas Despesas necessarias" style={{width: "25%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Valor do IR" style={{width: "20%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Valor Total da Nota" style={{width: "20%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Valor Total da Nota" style={{width: "20%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                </div>
                             
                <h3 style={{marginTop: "8px"}}>TRANSPORTADORA/VOLUMES TRANSPORTADOS</h3>
                <div>
                    <input type="text" placeholder="Valor do Frete" style={{width: "40%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Frete por conta" style={{width: "16%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="nao sei oque e" style={{width: "16%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Placa do Veiculo" style={{width: "16%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="UF" style={{width: "8%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="CNPJ\CPF" style={{width: "16%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                </div>
                <div>
                    <input type="text" placeholder="Endereço" style={{width: "50%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Municipio" style={{width: "30%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="UF" style={{width: "8%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Inscrição Estadual" style={{width: "30%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                </div>
                <div>
                    <input type="text" placeholder="Quantidade" style={{width: "18%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Especie" style={{width: "30%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Marca" style={{width: "30%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Numeração" style={{width: "30%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Peso bruto" style={{width: "18%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                    <input type="text" placeholder="Peso liquido" style={{width: "18%", border: "1px solid black", borderRadius: "3px", padding: "8px"}}/>
                </div>
        </TableBodyContent>
    </ContainerTable>
  );
};

export default GeraNotaFiscal