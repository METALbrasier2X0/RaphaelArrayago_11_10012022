import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Collapse from "./../Collapse"

/* fonction pour generer les étoiles du rating*/

function star(rate) {
    var starHTML = '';
    var rate = parseInt(rate);
    var increment = 0;
    var max = 5; // maximum rating
 
    while(increment < rate) {
      starHTML += '<i class="material-icons orange">grade</i>';
      increment++;
    }
 
    while(max > rate) {
      starHTML += '<i class="material-icons gray">grade</i>';
      max--;
    }
    return starHTML;
  };


  var snippet = '';

/* fonction pour  prendre l'id de l'url et select le produit correct*/

function Content(props) {

  let { id } = useParams();
  var logementData = require('./../json/logements.json');

  const product = logementData.find(element => element.id == id);

  let firstimg = product.pictures.shift();


  return (
    <>

<div id="carouselExampleControls" className="carousel slide content-slider" data-ride="carousel">

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={firstimg}  alt="First slide"/>
    </div>

{/*slider*/}

    {product.pictures.map(r => <div className="carousel-item">
      <img className="d-block w-100" src={r} />
    </div> ) }
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


{/*info produit*/}

    <div className="Content-page">
      <h1 className="Content-page-title">{product.title}</h1>
      <h3 className="content-location">{product.location}</h3>

      <div className="Content-page-tags">
        {product.tags.map(r => <span>{r}</span> ) }
      </div>
    </div>

{/*info Hôte*/}

    <div className="Content-page-bailleur">

      <div className="Content-page-bailleur-host">

        <p className="host-name">{product.host.name}</p>
        <img src={product.host.picture} />

      </div>

      <div className="rating" dangerouslySetInnerHTML={{__html: star(product.rating)}} />

     </div>

    <div className="Content-page-descriptions">
      <Collapse title="Description" text={product.description}/>
      <Collapse title="Equipement" text={product.equipments.map(r => <p  className="equipments"> {r}  </p> ) }/>
    </div>
    </>
  ); 
}

export default Content;
