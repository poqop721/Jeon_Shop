import { ReactNode } from "react";

const HeaderStyles = {
    width: '100%',
    background: 'black',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    color: 'white',
    fontWeight: '600',
  };
  const FooterStyles = {
    width: '100%',
    height: '50px',
    display: 'flex',
    background: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
  };
  
  const layoutStyles = {
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '90vh',
    backgroundColor : '#ebebeb',
  }
  
  function Header() {
    return (
      <div style={{ ...HeaderStyles }}>
        <span>Jeon Shop</span>
      </div>
    );
  }
  
  function Footer() {
    return (
      <div style={{ ...FooterStyles }}>
        <span>Jeon Shop</span>
      </div>
    );
  }
  
  
  function Layout({ children } : {children : ReactNode}) {
    return (
      <div>
        <Header />
        <div style={{...layoutStyles}}>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Layout;