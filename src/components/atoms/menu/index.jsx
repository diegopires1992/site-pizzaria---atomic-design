import {NavMenu,Navlink} from "./style";
const Menu = () =>{
  return(
    <>
    <NavMenu>      
      <Navlink to="/" activeStyle>
        Pagina Inicial
      </Navlink>
      <Navlink to="/Cardapio" activeStyle>
        Cardapio
      </Navlink>
    </NavMenu>
    </>
  );
}
export default Menu;