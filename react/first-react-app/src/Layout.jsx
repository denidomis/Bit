import "./index.css";
import App from "./components/App";
import Header from "./components/header/Header";

function Layout() {
  return (
    <>
      <div className="allApp">
        <Header />
        <App />
      </div>
    </>
  );
}

export default Layout;
