import styled  from "styled-components";
import {Link} from "react-router-dom";

export const Navlink = styled(Link)`
color:white;
display:flex;
align-items:center;
text-decoration:none;
`

export const ContainerLogo = styled.div`
color:#F7FFFF;
display:flex;
align-items:center;
font-size:2rem;

&:hover{
  color:#E3E05F;
}
`