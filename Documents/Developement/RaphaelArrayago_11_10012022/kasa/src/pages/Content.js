import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Collapse from "./Collapse"

function Content(props) {

  let { id } = useParams();
  var logementData = require('./../json/logements.json');

  const product = logementData.find(element => element.id == id);
  console.log(product)

  return (
    <>

    <div className="content-slider">
    {product.pictures.map(r => <img className="content-slider-img" src={r} />) }
    </div>

    <div className="Content-page">
    <h1 className="Content-page-title">{product.title}</h1>
    <h3 className="content-location">{product.location}</h3>

    <div className="Content-page-tags">
    {product.tags.map(r => <span>{r}</span> ) }
    </div>


    </div>

    <div className="Content-page-bailleur">

    <p>{product.host.name}</p>
    <img src={product.host.picture} />


    </div>

    <div className="Content-page-descriptions">
    <Collapse title="Description" text={product.description}/>
    <Collapse title="Equipement" text={product.equipments.map(r => <p className="equipments"> {r}  </p> ) }/>
    </div>
    </>
  ); 
}

export default Content;
