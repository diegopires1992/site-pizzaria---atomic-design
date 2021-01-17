import Header from "../../molecules/header";
import Footer from "../../molecules/footer";
import Body from "../../molecules/body";
import {ContainerHome,Container} from "./style";
import ContextHome from "../../molecules/contextHome";
const Home = () => {
  return (
    <>
      <ContainerHome>
        <Header></Header>        
        <Body>
          <Container>
          <ContextHome /> 
          </Container>
        
        </Body>
        <Footer></Footer>
      </ContainerHome>
    </>
  );
};

export default Home;
