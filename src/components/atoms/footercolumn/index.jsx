import {AiOutlineFacebook} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {Footercolumn,Footerlink} from "./style";
const FooterColumn = () => {
  return(
    <>
    <Footercolumn>
      <Footerlink>
          Endereço:Rua joão matos de almeida 474
      </Footerlink>
      <Footerlink>
          Telefone:41365789-12442
      </Footerlink>         
    </Footercolumn>
    <Footercolumn>
    <Footerlink>
      <AiOutlineFacebook size={35}/>          
      </Footerlink>
      <Footerlink>
      <AiOutlineInstagram size={35}/>          
      </Footerlink>    
      </Footercolumn>
 
    </>
  );
}

export default FooterColumn;