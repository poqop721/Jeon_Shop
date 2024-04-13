import { ReactNode } from "react";

const HeaderStyles = {
    background: 'black',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    color: 'white',
    fontWeight: '600',
  };
  const FooterStyles = {
    height: '50px',
    display: 'flex',
    background: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
  };
  
  const layoutStyles = {
    width : '100%',
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '90vh',
    backgroundColor : '#ededed',
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