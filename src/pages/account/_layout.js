import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

function Layout (props, children) {
  return (
    <>
      <Header {...props}/>
      <div className="container">
        <main className="content">
          {children}
        </main>
      </div>
      <Footer/>
    </>
  );
}

export default Layout;
