import parallaxeCss from './Parallaxe.module.css';
import Buttons from '../Buttons/Buttons';
import Cv from "../../assets/Cv.pdf";;

function Parallaxe() {
  return (
    <div className={parallaxeCss.container_Cv}>
      <h3>Mon parcours vous intéresse ?</h3>
      <p>Consultez mon profil complet en téléchargeant mon curriculum vitae.</p>

      <a className={parallaxeCss.btn} href={Cv} download="CV_Tallia.pdf">
        <span>Télécharger mon Cv</span> 
      </a>
    </div>
  );
}

export default Parallaxe