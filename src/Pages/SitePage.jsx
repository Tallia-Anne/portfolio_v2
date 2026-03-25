import Hero from '../Components/Hero/Hero';
import bgProjet from '../assets/images/heroprojet.jpg';
import projetsData from "../assets/projets";
// 1. AJOUT : Import du CSS (vérifie bien le chemin)
import sectionprojetCSS from './SitePage.module.css'; 
// 2. AJOUT : Import de ton composant Card
import Card_projet from '../Components/Card_projet/Card_projet'; 

function SitePage({ projets = projetsData }) {
  return (
    <> {/* Correction ici : le < seul est devenu <> */}
      <Hero title='Projet' image={bgProjet}/>

      <div className={sectionprojetCSS.wrapper_sectionprojet}>
        {projets.map((projet) => (
          <Card_projet
            key={projet.id}
            id={projet.id}
            title={projet.title}
            description={projet.description}
            technologies={projet.technologies}
            year={projet.year}
            image={projet.image}
            lien={projet.lien}
          />
        ))}
      </div>
    </>
  );
}

export default SitePage;