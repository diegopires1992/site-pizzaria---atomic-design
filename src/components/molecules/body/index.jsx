import {BodyContainer,BodyContent} from "./style";
import React from 'react';

const Body = ({children}) => {
  return (
    <>    
      <BodyContainer>
        <BodyContent>
          {children}
        </BodyContent>
      </BodyContainer>
    </>
  )
}

export default Body
