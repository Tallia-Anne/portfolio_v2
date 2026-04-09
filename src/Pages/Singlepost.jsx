import { useParams, Link } from "react-router-dom";
import projets from "../assets/projets";
import singlepostCSS from "./Singlepost.module.css"; 
import Buttons from "../Components/Buttons/Buttons";
import Card_techno from "../Components/Card_techno/Card_techno";
function SinglePost() {
  // 1. Récupération de l'ID depuis l'URL
  const { id } = useParams();

  // 2. Recherche du projet (Conversion en String pour éviter les erreurs de type)
  const projet = projets.find((item) => String(item.id) === String(id));

  // 3. Cas où le projet n'est pas trouvé
  if (!projet) {
    return (
      <div className={singlepostCSS.errorContainer}>
        <h2>Oups ! Projet non trouvé.</h2>
        <p>L'ID "{id}" ne semble pas exister dans notre base de données.</p>
        <Link to="/projets">Retour à la liste des projets</Link>
      </div>
    );
  }

   // On prend les 3 premiers restants

  return (
    <div className={singlepostCSS.wrapperSingle}>
      {/* En-tête du projet */}
      <div className={singlepostCSS.data}>
        <p className={singlepostCSS.date}>{projet.year || projet.date}</p>
        <h1>{projet.title}</h1>
        <p className={singlepostCSS.intro}>{projet.introduction}</p>
      </div>

      {/* Image principale */}
      <div className={singlepostCSS.imageSingle}>
        <Link to={projet.lien} >
          <div className={singlepostCSS.box_image}>
            <img src={projet.image} alt={projet.title} />
          </div>
        </Link>
      </div>

      {/* Contenu détaillé */}
      <div className={singlepostCSS.singleContent}>
        {/* Objectifs - On vérifie si le tableau existe avant de mapper */}
        <div className={singlepostCSS.Cont_inform}>
          <h4>Processus de création:</h4>
          {projet.objectifs && projet.objectifs.length > 0 ? (
            <div className={singlepostCSS.objectiflist}>
              <ul>
                {projet.objectifs.map((objectif, index) => (
                  <li key={index}>{objectif}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Aucun objectif spécifié pour ce projet.</p>
          )}
        </div>

        {/* Description complète */}
        <div className={singlepostCSS.Cont_inform}>
          <div className={singlepostCSS.descriptionText}>
            <h4>Description:</h4>
            <p>{projet.description}</p>
          </div>

          <div className={singlepostCSS.outils}>
            <h3>Outils et langages :</h3>
            <div className={singlepostCSS.icones}>
              {projet.technos?.map(
                (tech, index) =>
                  // On vérifie que tech existe pour éviter l'erreur "undefined"
                  tech && (
                    <Card_techno
                      key={index}
                      name={tech.name}
                      iconClass={tech.iconClass} // On transmet la classe CSS (ex: ri-reactjs-fill)
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section de suggestion de projets */}
      <div className={singlepostCSS.sectionPost}>
        <div className={singlepostCSS.viewprojet}>
          <h4>Derniers projets</h4>
          <Link to="/projets">
            <Buttons name="Tous les ateliers" lien="/projets" />
          </Link>
        </div>

        {/* On réutilise ton composant Section_projet */}
      </div>
    </div>
  );
}

export default SinglePost;
