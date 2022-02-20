import {useState} from "react"

function Collapse(props) {

 const [mon_state,set_mon_state] = useState(false)

  return (
    <>
<div className="bloc-collapse">
<button type="button" onClick={()=>{set_mon_state(!mon_state)} } className="collapsible-about">{props.title} <span className="down" aria-hidden="true"></span></button>

{mon_state&& <div className="content-about">
  <p  className="collapsible-about-text">{props.text}</p> 
</div>}

  </div>
    </>
  ); 
}

export default Collapse;