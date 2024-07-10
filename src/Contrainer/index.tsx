import SideBarItens from "../components/Aside";
import NewsAndAtualizações from "../components/CentalPage";
import InitialPage from "../components/Header";
import { ContainerPageCentral } from "./styles";


const ContainerGeral = () =>{
    return(
        <>
            <InitialPage/>
            <ContainerPageCentral>
            <NewsAndAtualizações />
                <SideBarItens />
            </ContainerPageCentral>
        </>
    )
}

export default ContainerGeral