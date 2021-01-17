import {Nav} from "./style";
import Menu from "../../atoms/menu";
import  Logo from "../../atoms/logo";
const Header = () =>{
  return(
    <>
    <Nav>
      <Logo/>
      <Menu/>
    </Nav>
    </>
  );
}
export default Header;