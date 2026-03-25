import buttonCss from './Buttons.module.css'
import { Link } from "react-router-dom";

function Buttons({name, lien}) {
  return (
    <>
      <Link to={lien}>
       
        <button className={buttonCss.btn_principal}> {name} </button>
      </Link>
    </>
  );
}

export default Buttons