import logo from './../Images/kasa.png';
import { Outlet, Link } from "react-router-dom";

function Layout()  {
  return (
    <>
      <nav className="nav-link">
        
        <Link to="/"> <img src={logo} className="App-logo" alt="logo" /> </Link>

          <ul>
          <li key="accueil">
            <Link to="/"> Accueil</Link>
          </li>
          <li key="about">
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
