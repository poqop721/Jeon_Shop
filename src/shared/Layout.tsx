import { ReactNode } from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
    background-color : black;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: white;
    font-weight: 600;
`

  const FooterDiv = styled.div`
    height: 50px;
    display: flex;
    background-color : black;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`
  
  const LayoutDiv = styled.div`
    width : 100%;
    display: flex;
    justify-content: center;
    min-height: 90vh;
    background-color : #ededed;
`
  
  function Header() {
    return (
      <HeaderDiv>
        <span>Jeon Shop</span>
      </HeaderDiv>
    );
  }
  
  function Footer() {
    return (
      <FooterDiv>
        <span>Jeon Shop</span>
      </FooterDiv>
    );
  }
  
  
  function Layout({ children } : {children : ReactNode}) {
    return (
      <div>
        <Header />
        <LayoutDiv>
          {children}
        </LayoutDiv>
        <Footer />
      </div>
    );
  }
  
  export default Layout;