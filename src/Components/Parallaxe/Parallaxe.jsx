import parallaxeCss from './Parallaxe.module.css'
import Buttons from '../Buttons/Buttons'
import Cv from '../../assets/images/Cv (3).pdf'

function Parallaxe() {
  return (
    <div className={parallaxeCss.container_Cv}>
      <h3>Mon parcours vous intéresse ?</h3>
      <p>Consultez mon profil complet en téléchargeant mon curriculum vitae.</p>

      <a href={Cv} download="CV_Tallia.pdf">
        <Buttons name="Télécharger mon Cv" />
      </a>
    </div>
  );
}

export default Parallaxe