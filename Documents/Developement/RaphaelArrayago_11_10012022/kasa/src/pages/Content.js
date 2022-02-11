import Collapse from "./Collapse"

function Content(props) {
  return (
    <>
    <h1 className="Banner Content-page"></h1>

    <div className="Content-page-descriptions">
    <Collapse title="Description" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
    <Collapse title="Equipement" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
    </div>
    </>
  ); 
}

export default Content;
