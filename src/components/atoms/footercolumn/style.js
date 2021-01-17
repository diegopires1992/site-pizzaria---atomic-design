import styled  from "styled-components";
import {Link} from "react-router-dom";

export const Footercolumn = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-right:3rem;
flex-wrap:wrap;
margin-left:15px;
`
export const Footerlink = styled(Link)`
color:#F7FFFF;
text-decoration:none;
margin-right:1rem;
&:hover{
  color:#E3E05F;
}

`

// export const Footercolumn = styled.div`


// `
