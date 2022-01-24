import {useState} from "react"

function Collapse(props) {

 const [mon_state,set_mon_state] = useState(false)

  return (
    <>
<button type="button" onClick={()=>{set_mon_state(!mon_state)} } className="collapsible-about">{props.title}</button>

{mon_state&& <div className="content-about">
  <p>{props.text}</p>
</div>}

    </>
  ); 
}

export default Collapse;