import LogementHome from "./../LogementHome"
/*Affichage de la page home*/
var logementData = require('./../json/logements.json');

function Home(props) {
  return (
    <>
      <h1 className="Banner">Chez vous, partout et ailleurs</h1>

      <div className="LogementHomeDiv">

        {logementData.map(r =>  <LogementHome title={r.title} url={r.id} img={r.pictures[0]}/> ) }

      </div>
    </>
  ); 
}
export default Home;
