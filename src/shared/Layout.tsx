import { ReactNode } from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color : white;
  width : 100%;
  height: 40px;
  display: flex;
  align-items: center;
`

const HeaderLogoA = styled.a`
  color : #4d4d4d;
  font-size : 1.2em;
  font-weight : 600;
  padding-left: 20px;
  text-decoration : none;
`

const FooterDiv = styled.div`
  height: 50px;
  width : 100%;
  display: flex;
  background-color : #5e5e5e;
  color: #dbdbdb;
  align-items: center;
  justify-content: center;
  gap : 0 2em;
  & span{
    font-weight : 500;
  }
`

const FooterA = styled.a`
  color : #dbdbdb;
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
      <HeaderLogoA href='/'>Jeon's Shop</HeaderLogoA>
    </HeaderDiv>
  );
}

function Footer() {
  return (
    <FooterDiv>
      <span>전성태</span> | 
      <span>010-2498-8175</span> | 
      <span><FooterA href="mailto:poqop721@naver.com">poqop721@naver.com</FooterA></span> | 
      <span><FooterA href="https://github.com/poqop721">https://github.com/poqop721</FooterA></span>
    </FooterDiv>
  );
}


function Layout({ children }: { children: ReactNode }) {
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