import Logement_home from "./Logement_home"

 var logementData = require('./../json/logements.json');

function Home(props) {
  return (
    <>
    <h1 className="Banner">Chez vous, partout et ailleurs</h1>

    <div className="Logement_Home_div">

      {logementData.map(r =>  <Logement_home title={r.title} url={r.id} img={r.pictures[0]}/> ) }

    </div>
    </>
  ); 
}
export default Home;
