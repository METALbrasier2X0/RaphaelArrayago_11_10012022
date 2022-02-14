import { Outlet, Link } from "react-router-dom";
function Logement_Home(props) {

  return (
    <>
    <Link to={"/logements/"+props.url}>
    <div className="Logement_Home"> 
    <div className="Logement_Home_title"> 
    <h3> {props.title} </h3>
    </div>
    <img className="Logement_Home_background" src={props.img} />
    </div>
    </Link>
    </>

);
}
export default Logement_Home;
