import SideBarItens from "../components/MenuSideLeft";
import InitialPage from "../components/Header";
import { ContainerPageCentral } from "./styles";
import PainelAdmin from "../components/PainelAdmin";
import { LayoutProps } from "../utils/Interfaces/layout";

const Layout = ({ children }: LayoutProps) => {

    
    let defaultContent = <PainelAdmin />
    
    return(
        <>
            <InitialPage/>
            <ContainerPageCentral>
                <div className="aside-and-content">
                    {children? children : defaultContent}
                    <SideBarItens /> 
                </div>
            </ContainerPageCentral>
        </>
    )
}

export default Layout