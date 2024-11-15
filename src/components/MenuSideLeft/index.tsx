import { DivGeral, SubMenuOpen } from "./styles";
import { useState } from "react";
import logo from "../../assets/image/LogoKeppler.png";
import menuData from "../../utils/listas/listaMenu"; // Importando a lista

function SideBarItens() {
  const [gerenciar, setGerenciar] = useState(true);

  return (
    <DivGeral id="Aside">
      <img src={logo} alt="My photo" />
      <nav>
        <h3>Central KepB</h3>
        <ul>
          <li
            style={{
              textAlign: "center",
              fontSize: 18,
              fontFamily: "Helvetica",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            Painel Administrador
          </li>
          <li>
            {gerenciar && (
              <SubMenuOpen>
                <ul>
                  {menuData.map((menu, index) => (
                    <li className="list-subMenu" key={index}>
                      <details>
                        <summary>{menu.title}</summary>
                        <ul style={{ marginLeft: 20, color: "#000" }}>
                          {menu.actions.map((action, idx) => (
                            <li className="list-subMenu" key={idx} style={{color: "#000"}}>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ))}
                </ul>
              </SubMenuOpen>
            )}
          </li>
        </ul>
      </nav>
    </DivGeral>
  );
}

export default SideBarItens;
