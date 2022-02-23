import { Outlet, Link } from "react-router-dom";
/*Affichage des product sur la page Home*/
function LogementHome(props) {

  return (
    <>
    <Link to={"/logements/"+props.url}>
      <div className="Logement_Home"> 
        <div className="Logement_Home_title"> 
          <h3> {props.title} </h3>
        </div>
        <img className="LogementHomeBackground" src={props.img} />
      </div>
    </Link>
    </>

);
}
export default LogementHome;
