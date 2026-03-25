import galleryCss from './Gallery.module.css'

import projectImg1 from "../../../assets/images/imgi_2_myessentialsbg.b8285824ba62d182bd7e.jpg";
import projectImg2 from "../../../assets/images/imgi_3_mockup.338390c1c73549c91e01.jpg";
import projectImg3 from "../../../assets/images/imgi_4_commerce.f94418b8f0350134114d.png";
import projectImg4 from "../../../assets/images/imgi_5_inhouse.fc5ec438a620d7a95692.png";
import Buttons from '../../Buttons/Buttons';

function Galley() {
  return (
    <div className={`${galleryCss.project_wrapper} section`}>
      <h2>Atelier numérique</h2>
      <p className={galleryCss.paragraph}>
        Permet d'apprendre les bases du numérique, de la sécurité en ligne au
        codage, tout en favorisant l'inclusion et l'autonomie dans un monde
        digital.
      </p>
      <div className={galleryCss.projectCards}>
        <div className={galleryCss.projectCard}>
          <img src={projectImg1} alt="" />

          <div className={galleryCss.Content}>
            <h3>Minecraft Adventurer</h3>
            <p>
              Cet atelier est un jeu inspiré de Minecraft Adventurer, conçu pour
              initiation au code.
            </p>
          </div>
        </div>

        <div className={galleryCss.projectCard}>
          <img src={projectImg2} alt="" />
          <div className={galleryCss.Content}>
            <h3>Découverte de Scratch</h3>
            <p>
              Cet atelier initie aux bases de Scratch pour créer des projets
              interactifs.
            </p>
          </div>
        </div>

        <div className={galleryCss.projectCard}>
          <img src={projectImg3} alt="" />
          <div className={galleryCss.Content}>
            <h3>Lamb: Jam Session Intro</h3>
            <p>
              Cet atelier permet de créer de la musique et est conçu pour
              l'initiation au code.
            </p>
          </div>
        </div>

        <div className={galleryCss.projectCard}>
          <img src={projectImg4} alt="" />

          <div className={galleryCss.Content}>
            <h3>Atelier sur la cyberharcelement sur la discrimination</h3>
            <p>
              {" "}
              Apprendre c'est quoi la cyberharcelement concernant la
              discrimination
            </p>
          </div>
        </div>
      </div>

      <div className={galleryCss.Project_all_button}>
       
        <Buttons name="Tous les ateliers" lien="/projets" />
      </div>
    </div>
  );
}

export default Galley;
