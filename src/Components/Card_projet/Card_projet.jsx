import Buttons from '../Buttons/Buttons';
import cardprojetCss from './Card_projet.module.css'
import { Link } from "react-router-dom";

function Card_projet({ id, title, description, image}) {
  return (
    <div className={cardprojetCss.cardprojet_wrapper}
        >  
       



        <div className={cardprojetCss.cardprojet_image} >
             <img src={image} alt="" />
        </div>
        <div className={cardprojetCss.content} >

        <h6>{title}</h6>
      <p> {description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
        <Buttons name="En savoir plus" lien={`/projet/${id}`} />

        </div>       



        </div>
  )
}

export default Card_projet