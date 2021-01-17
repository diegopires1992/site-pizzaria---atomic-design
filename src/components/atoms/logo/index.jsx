import { Navlink,ContainerLogo } from "./style";
import { GiFullPizza } from "react-icons/gi";
const Logo = () => {
  return (
    <>
      <Navlink>
        <ContainerLogo>
          <GiFullPizza size={60}></GiFullPizza>
          Pizza
        </ContainerLogo>
      </Navlink>
    </>
  );
};

export default Logo;
