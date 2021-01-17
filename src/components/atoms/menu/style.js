import styled  from "styled-components";
import {Link} from "react-router-dom";

export const Navlink = styled(Link)`
color:white;
display:flex;
align-items:center;
text-decoration:none;
margin-right:24px;
&:hover{
  color:#E3E05F;
  text-decoration:underline;
}

`
export const NavMenu = styled.div`
color:black;
display:flex;
align-items:center;

`