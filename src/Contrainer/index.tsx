import SideBarItens from "../components/MenuSideLeft";
import InitialPage from "../components/Header";
import PainelAdmin from "../components/PainelAdmin";
import { ContainerPageCentral } from "./styles";


const ContainerGeral = () =>{
    return(
        <>
            <InitialPage/>
            <ContainerPageCentral>
                <div className="aside-and-content">
                    <PainelAdmin />
                    <SideBarItens />
                </div>
            </ContainerPageCentral>
        </>
    )
}

export default ContainerGeral