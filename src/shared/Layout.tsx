import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CiShoppingCart } from "react-icons/ci";

const HeaderDiv = styled.div`
  background-color : white;
  width : 100%;
  height: 40px;
  display: flex;
  justify-content : space-between;
  align-items: center;
`

const HeaderLogoA = styled.a`
  color : #4d4d4d;
  font-size : 1.2em;
  font-weight : 600;
  margin-left: 1em;
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
  overflow : scroll;
  & span{
    font-weight : 500;
  }
  @media only screen and (max-width: 480px) {
    height: auto;
    gap : 0.3em 0em;
    font-size : 0.7em;
    flex-direction : column;
    padding : 0.7em 0;
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

const CartBtn = styled.button`
  border : 0px;
  font-size : 1.5em;
  display:flex;
  background-color : transparent;
  cursor : pointer;
  margin-right : 0.3em;
  width : fit-content;
`

function Header() {
  const navigate = useNavigate()
  return (
    <HeaderDiv>
      <HeaderLogoA href='/'>Jeon's Shop</HeaderLogoA>
      <CartBtn onClick={()=>navigate('cart')}><CiShoppingCart /></CartBtn>
    </HeaderDiv>
  );
}

function Footer() {
  return (
    <FooterDiv>
      <span>전성태</span>
      <span>010-2498-8175</span>
      <span><FooterA href="mailto:poqop721@naver.com">poqop721@naver.com</FooterA></span>
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