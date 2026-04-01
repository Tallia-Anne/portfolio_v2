import galleryCss from './Gallery.module.css'

import projectImg1 from "../../../assets/images/imgi_2_myessentialsbg.b8285824ba62d182bd7e.jpg";
import projectImg2 from "../../../assets/images/imgi_3_mockup.338390c1c73549c91e01.jpg";
import projectImg3 from "../../../assets/images/imgi_4_commerce.f94418b8f0350134114d.png";
import projectImg4 from "../../../assets/images/imgi_5_inhouse.fc5ec438a620d7a95692.png";
import Buttons from '../../Buttons/Buttons';

function Galley() {
  return (
    <div className={`${galleryCss.project_wrapper} section`}>
      <h2>Projets numériques</h2>
      <p className={galleryCss.paragraph}>
        Explorez un éventail de mes créations, chacune racontant une histoire
        unique et représentant mon savoir-faire artistique.
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
            <h3>Youtube music</h3>
            <p>
              Ce projet explore une refonte complète de l'interface mobile de
              YouTube Music.
            </p>
          </div>
        </div>

        <div className={galleryCss.projectCard}>
          <img src={projectImg3} alt="" />
          <div className={galleryCss.Content}>
            <h3>FreshComesty</h3>
            <p>
              FreshComesty est une plateforme de vente en ligne dédiée à la
              cosmétique haut de gamme.
            </p>
          </div>
        </div>

        <div className={galleryCss.projectCard}>
          <img src={projectImg4} alt="" />

          <div className={galleryCss.Content}>
            <h3>Inhouse</h3>
            <p>
              Développement d'une plateforme e-commerce dédiée aux objets
              connectés.
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
